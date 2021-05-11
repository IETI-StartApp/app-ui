import React from 'react';
import {AppBar, Button, Hidden, IconButton, Toolbar, Typography, CssBaseline } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {useStyles} from './styles';
import {useAuth} from "../../authServices/Auth";
import {useHistory} from "react-router";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';

export default function Navbar({handleDrawerToggle, test}) {
    const classes = useStyles();
    const {signOut} = useAuth() || {};
    const history = useHistory() || [];
    const buttons = <>
        <Button className={classes.buttonBar} onClick={() => history.push('/dashboard')} startIcon={<HomeIcon />}>Inicio
        </Button>
        <Button className={classes.buttonBar} onClick={signOut} startIcon={<ExitToAppIcon />}>Salir
        </Button>
    </>
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Hidden mdUp>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={() => handleDrawerToggle()}
                        >
                            <MenuIcon/>
                        </IconButton>
                    </Hidden>
                    <Typography variant="h6" className={classes.title}>
                        StartApp
                    </Typography>
                    {
                        test && buttons
                    }
                    {
                        buttons
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}
