import React from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './styles';

export default function Navbar({ handleDrawerToggle }) {

    const classes = useStyles();

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
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    StartApp
                </Typography>
                <Button className={classes.buttonBar}>Opción 1</Button>
                <Button className={classes.buttonBar}>Opción 2</Button>
                <Button className={classes.buttonBar} variant="outlined" >Opción 3</Button>
            </Toolbar>
        </AppBar>
    );
}