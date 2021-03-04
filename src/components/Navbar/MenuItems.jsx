import React from 'react';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useStyles } from './styles';

export default function MenuItems() {

    const classes = useStyles();
    const items = [
        {text:"Opción 1", icon: <LabelImportantIcon />},
        {text:"Opción 2", icon: <LabelImportantIcon />},
        {text:"Opción 3", icon: <LabelImportantIcon />},
        {text:"Opción 4", icon: <LabelImportantIcon />},
        {text:"Opción 5", icon: <LabelImportantIcon />}
    ];

    return (
        <List component='nav'>
            {
                items.map( (item) => (
                    <ListItem button className={classes.mainColor} key={item.text}>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))
            }
        </List>
    );

}