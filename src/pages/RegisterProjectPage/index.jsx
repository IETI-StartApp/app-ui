import React, {useCallback, useState} from 'react'
import {ProgressBar} from '../../components/Progressbar'
import {Fab, makeStyles} from '@material-ui/core';
import steps from './steps';
import {ProjectDescription} from '../../components/ProjectForm/ProjectDescription';
import {ProjectFinancing} from '../../components/ProjectForm/ProjectFinancing';
import {ProjectPresentation} from '../../components/ProjectForm/ProjectPresentation';
import {useForm} from "../../hooks/useForm";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {ThemeProvider} from "@material-ui/core/styles";
import globalTheme from "../../globalTheme";
import Navigation from "../../components/Navbar/Navigation";
import {useAuth} from "../../authServices/Auth";
import {postProject} from "../../services/userServices";

const useStyles = makeStyles({
    root: {
        '@media (min-width:480px)': {
            width: '70%'
        },
        '@media (min-width:600px)': {
            width: '70%'
        },
        '@media (min-width:801px)': {
            width: '60%'
        },
        '@media (min-width:1025px)': {
            width: '50%'
        },
        margin: "4rem auto",
    }
});

export const RegisterProjectPage = ({testing}) => {
    const [activeStep, setActiveStep] = useState(testing ? 2 : 0);
    const handleNext = useCallback(() => {
            setActiveStep(prevActiveStep => testing ? prevActiveStep - 1 : prevActiveStep + 1)
        }
        , [testing]);
    const handlePrev = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1)
    }
    const [inputValues, handleInputChange] = useForm({
        projectName: '',
        projectDescription: '',
        investment: 0,
        minInvestment: 0,
        country: '',
        videoSource: ''
    });
    const [dueDate, setDueDate] = useState(new Date());
    const handleDateChange = useCallback((date) => setDueDate(date), []);
    const handleChange = useCallback(handleInputChange, [handleInputChange]);
    const classes = useStyles();
    const dueDateString = dueDate.toDateString();
    const {currentUser} = useAuth() || {currentUser: {photoURL: '', displayName: ''}};
    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <ProjectDescription
                    formValues={inputValues}
                    handleChange={handleChange}
                    handleNext={handleNext}/>;
            case 1:
                return <ProjectFinancing
                    formValues={inputValues}
                    handleChange={handleChange}
                    handleNext={handleNext}
                    zone={{zone: "co-CO", region: "COP"}}
                    handleDateChange={handleDateChange}
                />;
            case 2:
                return <ProjectPresentation formValues={inputValues} handleChange={handleChange}/>;
            default:
                return "Nada para hacer" + dueDateString;
        }
    }
    console.log(inputValues)

    if (inputValues.videoSource !== "") {
        const project = {
            name: inputValues.projectName,
            image: inputValues.image,
            video: inputValues.videoSource,
            country: inputValues.country,
            description: inputValues.projectDescription,
            finance: {
                value: inputValues.investment,
                investorNumber: 2,
                valuation: inputValues.investment,
                minimumInvestment: inputValues.minInvestment,
                startDate: new Date().toISOString(),
                endDate: dueDate.toISOString()
            },
            comments: null,
            user: {
                firstName: currentUser.displayName[0],
                lastName: currentUser.displayName[1],
                email: currentUser.email,
                identification: 1019151562,
                role: "ENTREPRENEUR",
                description: "esto es una prueba",
                projects: []
            }
        }
        console.log("publique perras!")
        postProject(project)
    }
    return (
        <ThemeProvider theme={globalTheme}>
            <Navigation/>
            <div className={classes.root}>
                <ProgressBar activeStep={activeStep}/>
                {activeStep === steps.length ? "Finished" : (
                    <>
                        {getStepContent(activeStep)}
                    </>
                )}
                {activeStep !== 0 && activeStep < steps.length && (
                    <>
                        <Fab size="small" color="primary" aria-label="edit" onClick={handlePrev}>
                            <ArrowBackIcon/>
                        </Fab>
                    </>
                )}
            </div>
        </ThemeProvider>
    )
}
