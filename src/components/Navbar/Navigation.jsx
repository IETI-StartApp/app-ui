import React, {useState} from 'react';
import {Hidden} from '@material-ui/core/';
import Navbar from './index';
import MenuDrawer from './MenuDrawer';
import {useStyles} from './styles';

export default function Navigation( ) {

    const classes = useStyles();

    const [menuOpen, setMenuOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={classes.root}>
            <Navbar
                handleDrawerToggle={handleDrawerToggle}/>
            <Hidden smDown>
                <MenuDrawer 
                    variant="permanent"
                    open={true}/>
            </Hidden>
            <Hidden mdUp>
                <MenuDrawer 
                    variant="temporary"
                    open={menuOpen}
                    onClose={handleDrawerToggle}/>
            </Hidden>
        </div>
    );
}
