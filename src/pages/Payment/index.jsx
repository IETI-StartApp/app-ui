import React from 'react';
import Response from '../../components/Payment/Response';
import Navigation from '../../components/Navbar/Navigation';
import { useStyles } from './styles';

export const PaymentResponse = () => {
    const classes = useStyles();
    return (
        <>
            <Navigation />
            <br />
            <div className={classes.root}>
                <Response />
            </div>
        </>
    );
};