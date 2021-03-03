import React from 'react'
import {ThemeProvider} from "@material-ui/core/styles";
import {
    Typography,
    Button,
    TextField,
    InputAdornment
} from "@material-ui/core";
import globalTheme from "../../globalTheme";
import styles from "./styles"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import DateFnsUtils from '@date-io/date-fns';
import 'date-fns';
import {MuiPickersUtilsProvider,KeyboardDatePicker} from '@material-ui/pickers'


export const ProjectFinancing = React.memo(({formValues,handleChange,
    handleNext,handleDateChange,zone:{region,zone}}) => {
    const classes = styles();
    const {investment,minInvestment} = formValues;    
    const currencyFormater = Intl.NumberFormat(zone , {style: "currency", currency: region});
    return (
        <div className = {classes.mainContainer}>
            <ThemeProvider theme={globalTheme}>
                <Typography variant="h5" className={classes.descriptionHeader}>
                    Financiación y Calendario
                </Typography>
                <Typography variant="body2" className={classes.investment}>
                    {`Inversion deseada: ${currencyFormater.format(investment)}`}
                </Typography>
                <div className={classes.formContainer}>
                    <form>
                        <TextField
                                label="Inversión total"
                                variant="outlined"
                                name="investment"
                                value={investment}
                                className={classes.inputField}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}
                                onChange={handleChange}
                        />
                        <TextField
                                label="Inversión mínima"
                                variant="outlined"
                                name = "minInvestment"
                                value={minInvestment}
                                className={classes.inputField}
                                onChange={handleChange}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                }}                 
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className={classes.inputField}
                                disableToolbar
                                id="due-date"
                                showTodayButton={true}
                                format="MM/dd/yyyy"
                                label="Fecha máxima de inversión"
                                onChange={handleDateChange}
                                >
                            </KeyboardDatePicker>
                        </MuiPickersUtilsProvider>
                        <>  
                            <Button
                                variant= "contained"
                                className = {classes.btn}
                                endIcon = {<EmojiObjectsIcon/>}
                                onClick = {handleNext}               
                            >
                                Presenta tu idea 
                            </Button>
                        </>
                    </form>
                </div>
            </ThemeProvider>
        </div>
    )
});
