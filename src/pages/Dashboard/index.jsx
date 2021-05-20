import React, {useState,useEffect} from 'react';
import { InvestorDashboard, EntrepreneurDashboard, ConsultorDashboard} from "../../components";
import { getUserByEmail } from '../../services/userServices';
import {Auth} from "../../authServices/firebase-config";
export const Dashboard = () => {
    
    const [role, setRole] = useState("");
    useEffect(() => {
        async function setUserRole(){
            const user = await getUserByEmail(Auth.currentUser.email)
            setRole(user.role);
        }
        setUserRole();
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
            {
                role === "CONSULTOR" &&
                <ConsultorDashboard />
            }
        </>
    );
}
