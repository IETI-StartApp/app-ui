import React, {useRef} from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {useHistory} from "react-router";
import logo from "./startapp.png";

export const Header = () => {
    const history = useHistory() || [];
    const handleOnClick = () => history.push('/signin')
    const buttonref = useRef(null)

    return (
        <>
            <Toolbar style={{
                background: 'black',
                marginBottom: '10px',
                alignContent: 'center'
            }}>
                <div style={{width: '89vw', paddingLeft: '48%'}}>
                    <img style={{height: '50px', color: 'white'}} src={logo} alt={''}/>
                </div>
                <IconButton>
                    <PersonOutlineIcon style={{
                        color: 'white'
                    }}/>
                </IconButton>
                <Button style={{
                    background: "#950740",
                    color: 'white',
                    padding: '10px 20px',
                    width: '106px',
                    height: '50px'
                }} size="small" onClick={handleOnClick} ref={buttonref} id='buttonLog'>
                    Sign in
                </Button>
            </Toolbar>
        </>
    );
}

