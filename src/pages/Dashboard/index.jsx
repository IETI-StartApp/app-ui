import React from 'react';
import { InvestorDashboard, EntrepreneurDashboard} from "../../components";

export const Dashboard = ( ) => {
    const userType = "Entrepreneur";

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
