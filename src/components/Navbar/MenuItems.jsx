import React from 'react';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useStyles } from './styles';

export default function MenuItems() {
    const classes = useStyles();

    return (
        <List component='nav'>
            <ListItem div>
            </ListItem>
            <ListItem button className={classes.mainColor}>
                <ListItemIcon>
                    <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary='Opción 1' />
            </ListItem>
            <ListItem button className={classes.mainColor}>
                <ListItemIcon>
                    <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary='Opción 2' />
            </ListItem>
            <ListItem button className={classes.mainColor}>
                <ListItemIcon>
                    <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary='Opción 3' />
            </ListItem >
            <ListItem button className={classes.mainColor}>
                <ListItemIcon>
                    <LabelImportantIcon />
                </ListItemIcon>
                <ListItemText primary='Opción 4' />
            </ListItem>
        </List>
    );

}