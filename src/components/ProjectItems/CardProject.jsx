import React from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core';
import {useStyles} from './styles';
import ProgressGraph from './ProgressGraph';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default function CardProject({project}) {
    const { name, image, finance} = project;
    const {value, valuation, startDate} = finance;
    const classes = useStyles();
    const owner = "Nombre de usuario";

    return (
        <Card className={classes.sizeCard}>
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
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography variant="body2" component="p">
                    $ {valuation} Meta de financiación
                </Typography>
                <Box position="relative" display="inline-flex" mt={2}>
                    <Box mr={5}>
                        <Box position="relative" display="inline-flex">
                            <Avatar className={classes.avatar}><MonetizationOnIcon/></Avatar>
                        </Box>
                        <Typography> Financiado </Typography>
                        <Typography className={classes.mainColor}> $ {value}</Typography>
                    </Box>
                    <Box mr={5}>
                        <ProgressGraph progress={value * 100 / valuation}/>
                        <Typography> Progreso </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
