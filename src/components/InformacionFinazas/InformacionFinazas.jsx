import { Grid, Paper, List, ListItemText } from '@material-ui/core';
import React from 'react';
import {styles} from './styles'
import { Button } from '../ButtonCustom/Button';


export const InformacionFinazas = ({
                                    valor,
                                    inversionistas,
                                    valoracion,
                                    InversionMinima,
                                    socios,
                                    fechaInicio,
                                    FechaFin, 
}) => {
    const classes = styles();
    return(
        <>
        <Grid container >
            <Grid item xs={12} className={classes.valores}>
                {valor}
            </Grid>
        </Grid>
        <hr color='#960740' size ='3' width ='67%'/>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>{inversionistas}</text>     
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Inversionistas</text>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>{valoracion}</text>     
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Valoración</text>
                        </ListItemText>
                    </List>    
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>{InversionMinima}</text>     
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Inversión minima</text>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                           <text className={classes.numeros}>{socios}</text>    
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Días faltantes</text>
                        </ListItemText>
                    </List>    
                </Grid>
            </Grid>
        </Paper>
        <Paper className={classes.paper}>
            <Grid container >
                <Grid item xs={6}>
                    <List>
                        <ListItemText >
                            <text className={classes.numeros}>{fechaInicio}</text>    
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Fecha inicio</text>
                        </ListItemText>
                    </List>
                </Grid>
                <Grid item xs={6}>
                    <List>
                        <ListItemText className={classes.numeros}>
                            <text className={classes.numeros}>{FechaFin}</text>
                        </ListItemText>
                        <ListItemText>
                            <text className={classes.descripcion}>Fecha Final</text>
                        </ListItemText>
                    </List>
                </Grid>
            </Grid>
        </Paper>

        <Grid item xs={12} className={classes.valores}>
            <Button green onClick={() => console.log("HOLA")} >
                Invertir ahora
            </Button>
        </Grid>
                        
                
        </>
    );
};