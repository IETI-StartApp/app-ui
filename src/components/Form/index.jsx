import React, {useRef, useState} from 'react';
import {Button, Checkbox, TextField, Typography} from "@material-ui/core";
import 'typeface-roboto';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

import {CheckBoxArea, FooterWrapper, ForgotPasswdArea, InputArea, TextArea, Wrapper} from "./styles";
import {CustomTypography} from "../ButtonCustom";
import google from '../../icons/google.svg'
import {useAuth} from "../../services/Auth";
import {useHistory} from "react-router";


export const Form = ({signInWithEmailAndPassword, signInWithGoogle}) => {

    const [checked, setChecked] = useState(false);
    const emailRef = useRef('');
    const passwdRef = useRef('');
    const history = useHistory();

    function handleChange(event) {
        setChecked(event.target.checked)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            console.log(emailRef.current.value, passwdRef.current.value)
            await signInWithEmailAndPassword(emailRef.current.value, passwdRef.current.value)
            history.push('/register-project')
        } catch (error) {
            alert(error)
        }
    }
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <TextArea>
                    <Typography>
                        Email
                    </Typography>
                </TextArea>
                <InputArea>
                    <TextField inputRef={emailRef} label="Email" variant="outlined" fullWidth type='email' required/>
                </InputArea>
                <TextArea>
                    <Typography>
                        Contraseña
                    </Typography>
                </TextArea>
                <InputArea>
                    <TextField inputRef={passwdRef} label='Contraseña' variant="outlined" fullWidth type='password'
                               required/>
                </InputArea>
                <FooterWrapper>
                    <CheckBoxArea>
                        <Checkbox
                            className={`without-padding`}
                            checked={checked}
                            onChange={handleChange}
                            style={{
                                color: "#4A5568",
                                background: "none",
                                borderradius: "none"
                            }}
                            icon={<CircleUnchecked/>}
                            checkedIcon={<CircleChecked/>}
                        />
                        <CustomTypography text='#2D3748' style={{padding: '10px 0'}}>Recordarme</CustomTypography>
                    </CheckBoxArea>
                    <ForgotPasswdArea>
                        <CustomTypography
                            style={{padding: '10px 0', cursor: 'pointer'}}
                            text='#2C5282'
                            onClick={() => {
                                alert('You are going to be redirected!')
                            }}
                        >
                            ¿Olvidaste la contraseña?
                        </CustomTypography>
                    </ForgotPasswdArea>
                </FooterWrapper>
                <Button
                    type='submit'
                    fullWidth
                    style={{
                        background: "#950740",
                        color: 'white',
                        textTransform: 'none',
                        height: '50px'
                    }}>
                    Entrar
                </Button>
            </form>
            <Button onClick={() => {
                signInWithGoogle()
                history.push('/register-project')
            }}
                    fullWidth
                    style={{
                        background: "#2D3748",
                        color: 'white',
                        textTransform: 'none',
                        height: '50px',
                        marginTop: '20px'
                    }}>
                <img src={google} height={20} width={20} style={{paddingRight: '11px'}} alt='logo'/>
                Entrar con Google
            </Button>
        </Wrapper>
    );

};
