import React, { useState } from 'react'
import { ThemeProvider } from "@material-ui/core/styles";
import {
    Typography,
    Button,
    TextField,
    InputAdornment,
    Grid
} from "@material-ui/core";
import globalTheme from "../../globalTheme";
import styles from "./styles"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import 'date-fns';
import { Video } from '../Video/Video'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export const ProjectPresentation = ({ formValues, handleChange, handleNext}) => {
    const classes = styles();
    const { country,videoSource } = formValues;
    const [isVisible, setVisible] = useState(false);
    return (
        <div className={classes.mainContainer}>
            <ThemeProvider theme={globalTheme}>
                <Typography variant="h5" className={classes.descriptionHeader}>
                    Presenta tu proyecto
                </Typography>
                <Typography variant="body2" className={classes.investment}>
                    "Presenta tu proyecto con un video de youtube"
                </Typography>
                <div className={classes.formContainer}>
                    <form>
                        <TextField
                            label="País"
                            variant="outlined"
                            name="country"
                            value={country}
                            className={classes.inputField}
                            onChange={handleChange}
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><span>🏳️</span></InputAdornment>,
                            }}
                        />
                        <Grid container direction="row" justify="center" alignItems="center" spacing={1}>
                            <Grid item xs={9}>
                                <TextField
                                    label="Link del video"
                                    variant="outlined"
                                    value={videoSource}
                                    name="videoSource"
                                    className={classes.inputField}
                                    onChange={handleChange}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><span>🎥</span></InputAdornment>,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    variant="contained"
                                    className={classes.btn}
                                    endIcon={<ArrowForwardIosIcon />}
                                    onClick={() => setVisible(true)}
                                >
                                    Update
                                </Button>
                            </Grid>

                        </Grid>
                        {isVisible ? <Video video={videoSource} ancho="100%" alto="100%" /> : null}
                        <>
                            <Button
                                variant="contained"
                                className={classes.btn}
                                endIcon={<EmojiObjectsIcon />}
                                onClick={handleNext}
                            >
                                Registra tu proyecto
                            </Button>
                        </>
                    </form>
                </div>
            </ThemeProvider>
        </div>
    )
}
