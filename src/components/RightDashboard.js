import React, { useState } from 'react';
import "../css/rightdashboard.css";
import Pagination from '../components/Pagination';
import { motion } from 'framer-motion';

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

    //motion framer
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <div className="r-main">
            <h2>List of Profiles</h2>
            <div className="filter">
                <h3>Filters</h3>
                <div className="search-filter">
                    <div className="find-user">
                        <select className="searchbox" placeholder="Country" onChange={(query) => {
                            setSearchInput(query.target.value)
                        }}>
                            <option selected>Filter By card type</option>
                            <option value="discover">Discover</option>
                            <option value="mastercard">Mastercard</option>
                            <option value="verve">Verve</option>
                        </select>
                    </div>
                    <button type="button" onClick={() => {
                        setSearchInput("male")
                    }} >Male Profiles</button>
                    <button type="button" onClick={() => {
                        setSearchInput("female")
                    }} >Female Profiles</button>
                    <div className="search-icon">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="searchbox" type="text" onChange={(query) => {
                            setSearchInput(query.target.value)
                        }} placeholder="Find a user" />
                    </div>
                </div>

            </div>
            { isLoading === true ?
                <motion.div initial="hidden"
                animate="visible"
                variants={variants}
                className="wait">
                    <h3>Please wait . . . </h3>
                </motion.div>
                :
                currentProfiles.length > 0 ?
                    <div className="profiles">
                        {currentProfiles.filter((val) => {
                            if (searchInput === "") {
                                return val;
                            } else if (val.Gender.toLowerCase() === searchInput.toLowerCase()) {
                                return val;
                            } else if (val.CreditCardType.toLowerCase() === searchInput.toLowerCase()) {
                                return val;
                            } else if (val.FirstName.toLowerCase().includes(searchInput.toLowerCase())) {
                                return val;
                            }
                        })
                            .map((profile, index) => {
                                return (
                                    <motion.div initial="hidden"
                                        animate="visible"
                                        variants={variants}
                                        key={index} {...profile} className="p-list">
                                        <div className="details">
                                            <div><span className="d-title">Full Name:</span> {profile.FirstName} {profile.LastName}</div>
                                            <div><span className="d-title">Email:</span> {profile.Email}</div>
                                            <div><span className="d-title">Gender:</span> {profile.Gender}</div>
                                            <div><span className="d-title">Last Login:</span> {profile.LastLogin}</div>
                                        </div>
                                        <div className="cardType"><span>{profile.CreditCardType}</span></div>
                                    </motion.div>
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