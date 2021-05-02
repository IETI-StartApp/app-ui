import React from 'react';
import {AppBar, Button, Hidden, IconButton, Toolbar, Typography} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from './styles';
import {useAuth} from "../../authServices/Auth";
import {useHistory} from "react-router";

export default function Navbar({handleDrawerToggle}) {
    const classes = useStyles();
    const {signOut} = useAuth() || {};
    const history = useHistory() || {};
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
                    <Button className={classes.buttonBar} onClick={() => history.push('/register-project')}>Agregar
                        proyecto</Button>
                    <Button className={classes.buttonBar} onClick={() => history.push('/')}>Ver mis proyectos</Button>
                    <Button className={classes.buttonBar} onClick={() => history.push('/projects')}>Ver todos los
                        proyectos</Button>
                    <Button className={classes.buttonBar} variant="outlined" onClick={signOut}>Cerrar sesión
                    </Button>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}
