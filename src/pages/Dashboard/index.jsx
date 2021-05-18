import React, {useState,useEffect} from 'react';
import { InvestorDashboard, EntrepreneurDashboard} from "../../components";
import { getUserByEmail } from '../../services/userServices';
import {Auth} from "../../authServices/firebase-config";
export const Dashboard = () => {
    
    const [role, setRole] = useState("");
    useEffect(async() => {
        const user = await getUserByEmail(Auth.currentUser.email)
        setRole(user.role);
    }, [role])
    return (
        <>
            {
                role === "INVESTOR" &&
                <InvestorDashboard />
            }
            {
                role === "ENTREPRENEUR" &&
                <EntrepreneurDashboard />
            }
        </>
    );
}
