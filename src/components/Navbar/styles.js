import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#fff',
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
        width: 350,
    },
    content: {
        [theme.breakpoints.up('sm')]: {
            marginLeft: 236
        },
        padding:theme.spacing(10,2)
    },
    menuHeader: {
        height: theme.spacing(12),
        backgroundColor: "#950740",
        color: "#fff",
    },
    offset: theme.mixins.toolbar
}));