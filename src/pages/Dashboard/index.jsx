import React from 'react';
import { InvestorDashboard, EntrepreneurDashboard} from "../../components";
import { useLocation } from "react-router-dom";

export const Dashboard = () => {
    const {state : {role} = "ENTREPENEUR"} = useLocation();
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
