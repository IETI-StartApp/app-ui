import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            marginTop: 50,
            marginLeft: 300
        },
        marginTop: '50px',
        marginLeft: '300',
        padding: theme.spacing(4)
    }
}));
