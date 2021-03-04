import React from 'react';
import { Drawer } from '@material-ui/core/';
import { useStyles } from './styles';
import MenuItems from './MenuItems';

export default function MenuDrawer( { open, onClose} ){
    const classes = useStyles();

    return (
        <Drawer 
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant= "temporary"
            open={open}
            onClose={onClose ? onClose : null}
        >
            <div className={classes.offset}>
                <div className={classes.menuHeader}>
                </div>
            </div>
            <MenuItems />
        </Drawer>
    );
}