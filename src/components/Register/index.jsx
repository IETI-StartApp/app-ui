import "./styles.js";
import React, { useState } from 'react'
import { Grid, TextField } from '@material-ui/core';
import { BackDesign, ButtonDesign, ErrorDesign, FormDesign } from "./styles";
import { useAuth } from "../../authServices/Auth";
import { useHistory } from "react-router";
import background from '../../pages/LoginPage/background.png'

export const Register = () => {
    const history = useHistory() || [];
    const { createUserWithEmailAndPassword } = useAuth() || {};
    const [values, setValues] = useState({
        username: "",
        email: "",
        contra: "",
        contra2: ""
    })
    const handleChange = e => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validationForm(values));
        setIsSubmitting(true)
        if (Object.keys(errors) < 1 && isSubmitting) {

            createUserWithEmailAndPassword(values.email, values.contra, values.username)
            .then(history.push('/complete-info', { firstNameU: values.username }))
            .catch(alert("Error"));
        }
    }
    function validationForm(valor) {
        let errores = {}
        if (!valor.username.trim()) {
            errores.username = "Required"
            setIsSubmitting(false)
        }
        if (!valor.email) {
            errores.email = 'Required';
            setIsSubmitting(false)
        } else if (!/\S+@\S+\.\S+/.test(valor.email)) {
            errores.email = 'Email address is invalid';
            setIsSubmitting(false)
        }
        if (!valor.contra) {
            errores.contra = "Required"
            setIsSubmitting(false)
        } else if (valor.contra.length < 6) {
            errores.contra = "Needs at least 6 characters "
            setIsSubmitting(false)
        }
        if (!valor.contra2) {
            errores.contra2 = "Required"
            setIsSubmitting(false)
        } else if (valor.contra !== valor.contra2) {
            errores.contra2 = "Do not match"
            setIsSubmitting(false)
        }
        return errores;
    }

    return (
        <Grid container
            direction="row"
            justify="flex-end"
            alignItems="stretch"
            style={{ overflowY: "auto" }}>
            <Grid item xs={6}>
                <img alt="" src={background} style={{
                    width: "100%",
                    height: "100%",
                    overflowY: "auto"
                }} />
            </Grid>
            <Grid item xs={6}>
                <Grid container style={{
                    marginTop: "25px"
                }} direction="row-reverse" justify="space-around"
                    alignItems="center">
                    <Grid item xs={8}>
                    </Grid>
                    <BackDesign> Back</BackDesign>
                </Grid>
                <div style={{
                    position: "relative",
                    '@media (min-width:780px)': {
                        width: '28.125rem'
                    },
                    height: "auto",
                    padding: "6rem"
                }}>
                    <FormDesign className="form" onSubmit={handleSubmit}>
                        <h1>Completa tu perfil </h1>
                        <h3>A efectos de la regulación del sector, se requieren los datos de su perfil</h3>
                        <div>
                            <TextField style={{
                                width: "100%",
                                margin: "1rem 0",
                            }}
                                id="outlined-basic"
                                label="Nombre"
                                name="username"
                                type="text"
                                value={values.username}
                                onChange={handleChange} />
                            {errors.username && <ErrorDesign>{errors.username}</ErrorDesign>}
                        </div>
                        <div className="inputs">
                            <TextField style={{
                                width: "100%",
                                margin: "1rem 0",
                            }}
                                id="standard-basic"
                                label="Email"
                                type="email"
                                name="email"
                                value={values.email}
                                onChange={handleChange} />
                            {errors.email && <ErrorDesign>{errors.email}</ErrorDesign>}
                        </div>
                        <div className="inputs">
                            <TextField style={{
                                width: "100%",
                                margin: "1rem 0",
                            }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="contra"
                                value={values.contra}
                                onChange={handleChange} />
                            {errors.contra && <ErrorDesign>{errors.contra}</ErrorDesign>}
                        </div>
                        <div className="inputs">
                            <TextField style={{
                                width: "100%",
                                margin: "1rem 0",
                            }}
                                id="standard-basic"
                                label="Confirmed Password"
                                type="password"
                                name="contra2"
                                value={values.contra2}
                                onChange={handleChange} />
                            {errors.contra2 && <ErrorDesign>{errors.contra2}</ErrorDesign>}
                        </div>
                        <ButtonDesign className="button" type="submit" style={{
                            cursor: "pointer"
                        }}>
                            Sign Up
                        </ButtonDesign>
                    </FormDesign>
                </div>
            </Grid>
        </Grid>
    )
}
export default Register
