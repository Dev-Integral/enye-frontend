import React, {useState, useEffect} from "react";
import axios from 'axios';
// components
import LeftDashboard from "../components/LeftDashboard";
import RightDashboard from "../components/RightDashboard";
import '../css/dashboard.css';

const Dashboard = () => {
    const [profiles, setProfiles] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProfiles = async () => {
            setLoading(true);
            const res = await axios.get("https://api.enye.tech/v1/challenge/records");
             setProfiles(res.data.records.profiles);
             setLoading(false);
        } 

        fetchProfiles()
    }, []);

    console.log(profiles);
    return (
        <div className="main">
            <LeftDashboard />
            <RightDashboard isLoading={isLoading} profilesList={profiles} />
        </div>
    )
}

export default Dashboard;