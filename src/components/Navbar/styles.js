import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#fff',
    },
    menuButton: {
        marginRight: theme.spacing(2),
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
}));