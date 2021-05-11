import React from 'react';
import { InvestorDashboard } from "../../components";

export const Dashboard = ( ) => {
    const userType = "Investor";

    return (
        <>
            {
                userType === "Investor" &&
                <InvestorDashboard />
            }
        </>
    );
}
