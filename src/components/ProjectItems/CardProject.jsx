import React from 'react';
import {Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography} from '@material-ui/core';
import {useStyles} from './styles';
import ProgressGraph from './ProgressGraph';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';

export default function CardProject({project}) {

    console.log(project)
    const a = "{\n" +
        "    \"id\": \"6060c953394ecb3f0eda5fe5\",\n" +
        "    \"name\": \"proyectodad\",\n" +
        "    \"image\": \"image.html\",\n" +
        "    \"video\": \"videox\",\n" +
        "    \"country\": \"countryx\",\n" +
        "    \"description\": \"x\",\n" +
        "    \"finance\": {\n" +
        "      \"value\": 1,\n" +
        "      \"investorNumber\": 3,\n" +
        "      \"valuation\": 5,\n" +
        "      \"minimumInvestment\": 1,\n" +
        "      \"startDate\": \"2019-02-16T05:00:00.000+00:00\",\n" +
        "      \"endDate\": \"2019-02-16T05:00:00.000+00:00\"\n" +
        "    }\n" +
        "  },"

    const {id, name, image, video, country, description, finance} = project;
    const {value, investorNumber, valuation, minimumInvestment, startDate, endDate} = finance;

    const classes = useStyles();
// pass it as props
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
                        <ProgressGraph progress={value*100/valuation}/>
                        <Typography> Progreso </Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}
