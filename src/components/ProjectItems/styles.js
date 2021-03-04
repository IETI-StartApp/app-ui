import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({

    sizeCard : {
        maxWidth : '350px',
        minWidth: '320px',
        height: '500px',
    },

    mainColor :{
        color: '#950740',
    },

    avatar :{
        backgroundColor: '#950740',
    },

    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },

}));
