import React from 'react'
import { useAuth } from '../../authServices/Auth';
import {InfoModal} from '../../components/InfoModal/InfoModal'
import globalTheme from '../../globalTheme'
import { ThemeProvider } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

export const CompleteInfo = () => {
    const {state : {firstNameU} = ""} = useLocation();
    const openModal = true;
    const {currentUser} = useAuth();
    console.log(currentUser);
    return (
        <ThemeProvider theme={globalTheme}>
            <InfoModal open={openModal} userEmail={currentUser.email} firstNameU={firstNameU} />    
        </ThemeProvider>
            
    )
}
