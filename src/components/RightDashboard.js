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
    const currentProfiles = profilesList.length > 1 ? profilesList.slice(indexOfFirstProfile, indexOfLastProfile) : null;

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const changeView = (viewType) => {
        console.log({incoming: viewType});
        /*switch (viewType) {
            case "female":
                setTitle(listName);
                break;
            case "male":
                setTitle(listName);
                const modifiedUsersMale = usersCopy.results.filter((user) => {
                    return user.gender === "male"
                })
                const maleUpdate = { results: modifiedUsersMale };
                setUsers(maleUpdate);
                break;
        }*/
    }
    const searchHandler=(input) => {
        setSearchInput(input.target.value);
        console.log({input: searchInput});
    }

    return (
        <div className="r-main">
            <h2>List of Profiles</h2>
            <div className="filter">
                <h3>Filters</h3>
                <div className="search-filter">
                    <div className="find-user">
                        <select className="searchbox" placeholder="Country">
                            <option>Country</option>
                        </select>
                    </div>
                    <button type="button" onClick={() => changeView("male")} >Male Profiles</button>
                    <button type="button" onClick={() => changeView("female")} >Female Profiles</button>
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
                            }
                            else if (val.FirstName.toLowerCase().includes(searchInput.toLowerCase())){ 
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