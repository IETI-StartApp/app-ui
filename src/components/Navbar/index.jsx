import React from 'react';
import {AppBar, Button, Hidden, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from './styles';
import {useAuth} from "../../authServices/Auth";

export default function Navbar({handleDrawerToggle, undeFunction}) {
    const classes = useStyles();
    const {signOut} = useAuth() || {};
    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => handleDrawerToggle()}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    StartApp
                </Typography>
                <Hidden smDown>
                    <Button className={classes.buttonBar}>Opción 1</Button>
                    <Button className={classes.buttonBar}>Opción 2</Button>
                    <Button className={classes.buttonBar} variant="outlined" onClick={signOut ? signOut : () => {
                    }}>Cerrar sesión</Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}
