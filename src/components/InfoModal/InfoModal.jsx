import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid, Select, FormControl, InputLabel,
    MenuItem, Modal, Button, Typography, TextField
} from '@material-ui/core';
import { useHistory } from "react-router";
import google from '../../icons/google.svg';
import { postUser } from '../../services/userServices';
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '400px',
        height: '80%',
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    },
    textField: {
        paddingBottom: "1rem",
        width: '100%'

    },

    button: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1)
    },
    header: {
        paddingTop: "0.5rem",
        paddingBottom: "1rem"
    },
}));



export const InfoModal = ({ open = true, userEmail, firstNameU="" }) => {

    const classes = useStyles();
    const history = useHistory();
    const [role, setRole] = useState("");
    const [firstName, setFirstName] = useState(firstNameU);
    const [lastName, setLastName] = useState("");
    const [identification, setIdentification] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const handleLogin = async () => {
        const user = {
            firstName,
            lastName,
            identification,
            role,
            description,
            image,
            email: userEmail,
            projects: []
        }
        try {
            await postUser(user);
            history.replace("/dashboard", { role: role });
        } catch (e) {
            alert("Error al crear usuario", e);
        }

    }
    return (
        <div>
            <Modal
                open={open}
            >
                <div className={classes.paper}>
                    <Typography variant="h4" color="primary" className={classes.header}>
                        Completa tu información
                            </Typography>
                    <form>
                        <Grid item xs={12}>
                            <TextField
                                label="Nombre"
                                className={classes.textField}
                                variant="outlined"
                                color="primary"
                                name="projectName"
                                value={firstName}
                                onChange={({ target }) => setFirstName(target.value)}
                            />
                            <TextField
                                label="Apellido"
                                className={classes.textField}
                                variant="outlined"
                                color="primary"
                                name="lastName"
                                value={lastName}
                                onChange={({ target }) => setLastName(target.value)}
                            />
                            <TextField
                                label="Cédula"
                                className={classes.textField}
                                variant="outlined"
                                color="primary"
                                type="number"
                                name="identification"
                                value={identification}
                                onChange={({ target }) => setIdentification(target.value)}
                            />
                            <TextField
                                label="Descripción de tu perfil"
                                className={classes.textField}
                                variant="outlined"
                                color="primary"
                                multiline
                                name="description"
                                value={description}
                                onChange={({ target }) => setDescription(target.value)}
                                rows={3}
                            />
                            <FormControl variant="outlined" className={classes.textField}>
                                <InputLabel id="demo-simple-select-outlined-label">Rol</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    value={role}
                                    onChange={({ target }) => setRole(target.value)}
                                    label="Status"
                                >
                                    <MenuItem value="ENTREPRENEUR">Emprendedor</MenuItem>
                                    <MenuItem value="INVESTOR">Inversionista</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                style={{
                                    background: "#2D3748",
                                    color: 'white',
                                    textTransform: 'none',

                                }}
                                className={`${classes.button} ${classes.textField}`}
                                onClick={handleLogin}

                            >
                                Completar Registro.
                                        
                            </Button>
                        </Grid>
                    </form>
                </div>
            </Modal>
        </div>
    )
}