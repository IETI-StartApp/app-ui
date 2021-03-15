import React from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core';
import {useStyles} from './styles';
import ProgressGraph from './ProgressGraph';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function CardProject({projectId}) {

    const classes = useStyles();
//TODO pass it as props
    const ownerImage = "https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos.jpg";
    const owner = "Nombre de usuario";
    const creationDate = new Date(2021, 10, 2);
    const projectImage = "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2018/07/25/15325097324389.jpg";
    const pReturn = 15;
    const fObjective = 30000000;
    const projectName = "Nombre del proyecto";
    const financed = 21000000;
    const partners = 10;

    return (
        <Card className={classes.sizeCard}>
            <CardHeader
                avatar={
                    <Avatar aria-label="photo" src={ownerImage}>
                    </Avatar>
                }
                title={owner}
                subheader={creationDate.toLocaleDateString()}
            />
            <CardMedia
                component="img"
                alt="Project image"
                height="210"
                image={projectImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {projectName}
                </Typography>
                <Typography variant="body2" component="p">
                    {pReturn}% de retorno efectivo anual
                </Typography>
                <Typography variant="body2" component="p">
                    $ {fObjective} Meta de financiación
                </Typography>
                <Box position="relative" display="inline-flex" mt={2}>
                    <Box mr={5}>
                        <Box position="relative" display="inline-flex">
                            <Avatar className={classes.avatar}><MonetizationOnIcon/></Avatar>
                        </Box>
                        <Typography> Financiado </Typography>
                        <Typography className={classes.mainColor}> $ {financed}</Typography>
                    </Box>
                    <Box mr={5}>
                        <ProgressGraph/>
                        <Typography> Progreso </Typography>
                    </Box>
                    <Box>
                        <Box position="relative" display="inline-flex">
                            <Avatar className={classes.avatar}><SupervisedUserCircleIcon/></Avatar>
                        </Box>
                        <Typography> Socios </Typography>
                        <Typography className={classes.mainColor}>{partners}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
