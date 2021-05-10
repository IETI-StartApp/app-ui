import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        backgroundColor: '#fff',
        zIndex: theme.zIndex.drawer + 1,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${300}px)`,
            marginLeft: 300,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: '#950740'
    },
    mainColor: {
        color: '#950740'
    },
    title: {
        flexGrow: 1,
        color: '#950740'
    },
    buttonBar: {
        color: '#950740',
        marginRight: theme.spacing(2),
    },
    drawer: {
        width: 350,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 300,
    },
    menuHeader: {
        height: theme.spacing(12),
        backgroundColor: "#950740",
        color: "#fff",
    },
    offset: theme.mixins.toolbar,
}));