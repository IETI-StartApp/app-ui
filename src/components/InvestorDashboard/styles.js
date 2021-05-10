import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            marginLeft: 300
        },
        padding: theme.spacing(4),
    },
    dashItem:{
        height: theme.spacing(14),
        width: 300,
    },
    itemContent:{
        marginLeft:theme.spacing(6)
    },
    cardAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(12),
        marginLeft: theme.spacing(1),
        marginTop: theme.spacing(1),
        position: 'absolute',
        backgroundColor: '#950740',
    },
    cardChart:{
        width: "100%",
        height: theme.spacing(80),
    },
    projects:{
        width: "100%",
        height: theme.spacing(80),
    },
    mainColor:{
        color: '#950740',
    },
    allItems:{
        height: "70vh"
    },
    chart:{
        paddingRight: '20px',
    },
    rootProjects: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(3),
      },
      gridList: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        height:  theme.spacing(68),
      },
      gridListTile: {
        minHeight: theme.spacing(65), 
        marginRight: 20,
        maxWidth : '350px',
        minWidth: '325px',
      },
      fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
        backgroundColor: '#950740',
        color: '#fff'
    },
    offset: theme.mixins.toolbar,
}));