import React from 'react';
import {Avatar, Grid, Card, CardContent, CardHeader, CardMedia, Typography, CardActionArea} from '@material-ui/core';
import {useStyles} from './styles';
import ProgressGraph from './ProgressGraph';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default function CardProject({project}) {
    const {name, image, finance} = project;
    const {value, valuation, startDate} = finance;
    const classes = useStyles();
    const owner = "Nombre de usuario";
    const partners = 5;

    return (
        <Card variant="outlined" className={classes.sizeCard}>
            <CardHeader
                avatar={
                    <Avatar aria-label="photo" src={image}>
                    </Avatar>
                }
                title={owner}
                subheader={startDate}
            />
            <CardMedia
                component="img"
                alt="Project image"
                height="210"
                image={image}
            />
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Meta de financiación: $ {valuation} 
                    </Typography>
                    <Grid container direction="row" justify="center" alignItems="start" spacing={5} className={classes.cardGrid}>
                        <Grid item>
                            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><Avatar className={classes.avatar}><MonetizationOnIcon/></Avatar></div>
                            <Typography align="center"> Financiado </Typography>
                            <Typography align="center" className={classes.mainColor}> $ {value}</Typography>
                        </Grid>
                        <Grid item>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><ProgressGraph progress={value * 100 / valuation}/></div>
                            <Typography align="center"> Progreso </Typography>
                        </Grid>
                        <Grid item>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}><Avatar className={classes.avatar}> { partners } </Avatar></div>
                            <Typography align="center"> Socios </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
