import React from 'react';
import { Drawer } from '@material-ui/core/';
import { useStyles } from './styles';
import MenuItems from './MenuItems';
import { useAuth } from "../../authServices/Auth";
import Typography from "@material-ui/core/Typography";

export default function MenuDrawer({ open, onClose, variant }) {
    const classes = useStyles();
    const { currentUser } = useAuth() || { currentUser: { photoURL: '', displayName: '' } };

    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={variant}
            open={open}
            onClose={onClose ? onClose : null}
        >
            <div className={classes.menuHeader} style={{ display: "flex", alignItems: "center" }}>
                <img src={currentUser.photoURL} alt="" />
                <Typography style={{ paddingLeft: "20px" }}>
                    {currentUser.displayName}
                </Typography>
            </div>
            <MenuItems userType="Entrepreneur" />
        </Drawer>
    );
}
