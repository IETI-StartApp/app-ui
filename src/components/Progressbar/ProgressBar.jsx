import React from 'react';
import {Step, StepLabel, Stepper, ThemeProvider} from '@material-ui/core';
import steps from './steps';
import progressTheme from './theme'


export const ProgressBar = ({activeStep}) => {
    return (

        <ThemeProvider theme={progressTheme}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map(step => (
                    <Step key={step}>
                        <StepLabel>
                            {step}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>
        </ThemeProvider>
    )
}
