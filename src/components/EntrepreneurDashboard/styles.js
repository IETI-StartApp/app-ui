import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
      fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
        backgroundColor: '#950740',
        color: '#fff'
    },
}));