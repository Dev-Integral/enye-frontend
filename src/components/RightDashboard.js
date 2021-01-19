import React from 'react';
import "../css/rightdashboard.css";

const RightDashboard = ({profilesList, isLoading}) => {
    return(
        <div className="r-main">
            <h2>List of Profiles</h2>
            { isLoading === true ?
            <div>
                <h3>Please Wait</h3>
            </div>
            :
            profilesList.length > 0 ?
            <div className="profiles">
                {profilesList.map((profile, index) =>{
                    return(
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
        </div>
    )
}

export default RightDashboard;