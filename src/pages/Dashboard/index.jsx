import React from 'react';
import { InvestorDashboard, EntrepreneurDashboard} from "../../components";

export const Dashboard = ({ userType="Entrepreneur" }) => {
    return (
        <>
            {
                userType === "Investor" &&
                <InvestorDashboard />
            }
            {
                userType === "Entrepreneur" &&
                <EntrepreneurDashboard />
            }
        </>
    );
}
