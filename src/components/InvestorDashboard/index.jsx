import React from 'react';
import Navigation from '../Navbar/Navigation';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Avatar, Grid, CardActionArea, Box, GridList, GridListTile, Fab } from '@material-ui/core/';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { useHistory } from "react-router";
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { InvestmentsChart } from "./InvestmentsChart";
import CardProject from '../ProjectItems/CardProject';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

export const InvestorDashboard = () => {
    const history = useHistory() || [];
    const classes = useStyles();
    const items = [
        { number: "4", description: "Proyectos Financiados", icon: <StarBorderIcon fontSize="large" />, path: "/" },
        { number: "3.5M", description: "Capital invertido", icon: <AttachMoneyIcon fontSize="large" />, path: "/dashboard" },
        { number: "1000", description: "Oportunidades de inversión ", icon: <TrendingUpIcon fontSize="large" />, path: "/" },
        { number: "2", description: "Proyectos guardados", icon: <BookmarkBorderIcon fontSize="large" />, path: "/" }
    ];
    const projects = [
        {
            name: "Proyecto 1", 
            image:"https://www.binarias.org/wp-content/uploads/2020/12/tegnologia.jpeg", 
            finance: { value:15000000, valuation:20000000, startDate: "10/03/2021"},
        },
        {
            name: "Proyecto 2", 
            image:"https://s3-us-west-2.amazonaws.com/wp-mpro-blog/wp-content/uploads/2016/03/14133959/s3-blog-tecnologia-como-prioridad-min.png", 
            finance: { value:10000000, valuation:17500000, startDate: "12/02/2021"},
        },
        {
            name: "Proyecto 3", 
            image:"https://thelogisticsworld.com/wp-content/uploads/2020/02/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg", 
            finance: { value:8000000, valuation:12000000, startDate: "21/01/2021"},
        },
    ];

    return (
        <>
            <Navigation />
            <div className={classes.offset}></div>
            <div className={classes.root}>
                <Grid container spacing={2} direction="col" justify="center" alignItems="center" className={classes.allItems}>
                    <Grid item xs={12}>
                        <Grid container spacing={2} direction="row" justify="center" className={classes.items}>
                            {
                                items.map(item => (
                                    <Grid item xs={12} sm={5} lg={3}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <Card variant="outlined" className={classes.dashItem}>
                                                <Avatar className={classes.cardAvatar} variant="rounded">
                                                    {item.icon}
                                                </Avatar>
                                                <CardActionArea onClick={() => { history.push(item.path) }}>
                                                    <CardContent className={classes.itemContent}>
                                                        <Typography variant="h4" align="center" className={classes.mainColor} >{item.number}</Typography>
                                                        <Typography align="center">{item.description}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </div>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} direction="row" justify="center">
                            <Grid item xs={12} sm={10} lg={6}>
                                <Card variant="outlined" className={classes.cardChart}>
                                    <CardContent>
                                        <Typography className={classes.mainColor} variant="button" display="block">Inversiones en los últimos 6 meses</Typography>
                                        <Box p={3}>
                                            <InvestmentsChart />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item xs={12} sm={10} lg={6}>
                                <Card variant="outlined" className={classes.projects}>
                                    <CardContent>
                                        <Typography className={classes.mainColor} variant="button" display="block">Oportunidades de inversión</Typography>
                                            <div className={classes.rootProjects}>
                                                <GridList  className={classes.gridList}>
                                                    {projects.map((project) => (
                                                        <GridListTile className={classes.gridListTile}>
                                                            <CardProject project={project} />
                                                        </GridListTile>
                                                    ))}
                                                </GridList>
                                            </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Fab aria-label="Chat" className={classes.fab}>
                    <ChatBubbleOutlineIcon />
                </Fab>
            </div>
        </>
    );
}