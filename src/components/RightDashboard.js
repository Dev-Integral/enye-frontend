import React, { useState } from 'react';
import "../css/rightdashboard.css";
import Pagination from '../components/Pagination';


const RightDashboard = ({ profilesList, isLoading }) => {

    // Change page
    const [profilesPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchInput, setSearchInput] = useState("")

    // Get current profiles
    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const currentProfiles = profilesList.slice(indexOfFirstProfile, indexOfLastProfile);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
        <div className="r-main">
            <h2>List of Profiles</h2>
            <div className="filter">
                <h3>Filters</h3>
                <div className="search-filter">
                    <div className="find-user">
                        <select className="searchbox" placeholder="Country" onChange={(query)=>{
                            setSearchInput(query.target.value)
                        }}>
                            <option selected>Filter By card type</option>
                            <option value="discover">Discover</option>
                            <option value="mastercard">Mastercard</option>
                            <option value="verve">Verve</option>
                        </select>
                    </div>
                    <button type="button" onClick={()=>{
                            setSearchInput("male")}} >Male Profiles</button>
                    <button type="button" onClick={()=>{
                            setSearchInput("female")}} >Female Profiles</button>
                    <div className="search-icon">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="searchbox" type="text" onChange={(query)=>{
                            setSearchInput(query.target.value)
                        }} placeholder="Find a user" />
                    </div>
                </div>

            </div>
            { isLoading === true ?
                <div>
                    <h3>Please Wait</h3>
                </div>
                :
                currentProfiles.length > 0 ?
                    <div className="profiles">
                        {currentProfiles.filter((val)=> {
                            if(searchInput === ""){
                                return val;
                            }else if(val.Gender.toLowerCase() === searchInput.toLowerCase()){
                                return val;
                            }else if(val.CreditCardType.toLowerCase() === searchInput.toLowerCase()){
                                return val;
                            }else if (val.FirstName.toLowerCase().includes(searchInput.toLowerCase())){ 
                                return val;
                            }else{
                                return val;
                            }
                        })
                        .map((profile, index) => {
                            return (
                                <div key={index} {...profile} className="p-list">
                                    <div>{profile.FirstName} {profile.LastName}</div>
                                    <div>{profile.Email}</div>
                                    <div>{profile.Gender}</div>
                                    <div>{profile.LastLogin}</div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <div>
                        <h3>List End!</h3>
                    </div>
            }
            <Pagination
                profilesPerPage={profilesPerPage}
                totalProfiles={profilesList.length > 0 ? profilesList.length : null}
                paginate={paginate}
                currentPage={currentPage} />

        </div>
    )
}

export default RightDashboard;