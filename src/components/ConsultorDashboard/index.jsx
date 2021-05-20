import React, {useState,useEffect} from 'react';
import Navigation from '../Navbar/Navigation';
import { TicketCard } from '../Support/TicketCard';
import { useStyles } from './styles';
import { Grid } from '@material-ui/core/';
import {getAllTickets} from '../../services/ticketServices'
import {Auth} from "../../authServices/firebase-config";
export const ConsultorDashboard = ({testing, objects}) => {
    const classes = useStyles();
    const [allTickets, setTickets] = useState([]);
    useEffect(() => {
        async function fetchTickets(){
            const receivedTickets = testing?objects : await getAllTickets();
            setTickets(receivedTickets);
        }
        fetchTickets();
    }, [allTickets,testing,objects]);

    return (
        <>
            <Navigation />
            <div className={classes.paper}>
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                spacing={1}
            >
                <Grid item sm={8} md={6}>
                    <TicketCard tickets={allTickets} title={"Tickets disponibles"} status = "OPEN"/>
                </Grid>
                
                <Grid item sm={8} md={6}>
                    <TicketCard tickets={allTickets.filter(ticket => ticket.receptor?.email === Auth.currentUser.email)} title={"Mis tickets pendientes"} status = "PENDING"/>
                </Grid>
            </Grid>
                
            </div>
            
        </>
    );
}
