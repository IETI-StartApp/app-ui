import React from 'react';
import { makeStyles,ThemeProvider } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import globalTheme from '../../globalTheme'
import { TicketTable } from './TicketTable';
const useStyles = makeStyles((theme) => ({
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        width: '450px',
        height: '60%'
    },
    textField: {
        paddingBottom: "1rem",
        width: '100%'
    },
    button: {
        marginRight: theme.spacing(2),
        marginTop: theme.spacing(1)
    },
    header: {
        paddingTop: "0.5rem",
        paddingBottom: "1rem"
    },
}));

export const TicketCard = ({tickets,title,status}) => {
    const classes = useStyles();
    return (
        <ThemeProvider theme={globalTheme}>
            <div className={classes.paper}>
                <Typography variant="h4" color="primary" className={classes.header}>
                    {title}
                </Typography>
                
                <TicketTable rows={tickets.filter(ticket => ticket.status === status)}/>
            </div>
        </ThemeProvider>
        
    )
}
