import React from 'react';
import List from '@material-ui/core/List';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { useStyles } from './styles';
import BarChartIcon from '@material-ui/icons/BarChart';
import {useHistory} from "react-router";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import VideoCallIcon from '@material-ui/icons/VideoCall';

export default function MenuItems() {
    const history = useHistory() || [];
    const userType = "Investor";
    const classes = useStyles()
    const investorItems = [
        {text:"Mis inversiones", icon: <StarBorderIcon />, path: '/'},
        {text:"Buscar Proyectos", icon: <SearchIcon />, path: '/projects'},
        {text:"Proyectos guardados", icon: <BookmarkBorderIcon />, path: '/projects'},
        {text:"Comunicarse con un asesor", icon: <VideoCallIcon />, path: '/'}
    ];
    const enterprisingItems = [
        {text:"Nuevo proyecto", icon: <AddIcon />, path: '/register-project'},
        {text:"Mis Proyectos", icon: <BarChartIcon />, path: '/'},
        {text:"Buscar Proyectos", icon: <SearchIcon />, path: '/projects'},
        {text:"Comunicarse con un asesor", icon: <VideoCallIcon />, path: '/'}
    ];
    const getMenuItems = () => {
        if (userType === "Investor"){
            return investorItems;
        } return enterprisingItems;
    }

    return (
        <List component='nav'>
            {
                
                getMenuItems().map( (item) => (
                    <ListItem button className={classes.mainColor} key={item.text} onClick={() => history.push(item.path)}>
                        <ListItemIcon className={classes.mainColor}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))
            }
        </List>
    );

}