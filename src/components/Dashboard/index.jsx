import React from 'react';
import Navigation from '../Navbar/Navigation';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { Grid, Fab } from '@material-ui/core/';
import { useStyles } from './styles';
import { ItemsGrid } from './ItemsGrid';
import { ProjectsCard } from './ProjectsCard';
import { ChartCard } from './ChartCard';

export const Dashboard = ( { items, projects, chart, projectsTitle, chartTitle } ) => {
    const classes = useStyles();

    return (
        <>
            <Navigation />
            <div className={classes.offset}></div>
            <div className={classes.root}>
                <Grid container spacing={2} direction="col" justify="center" alignItems="center" className={classes.allItems}>
                    <Grid item xs={12}>
                        <ItemsGrid items={items} />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2} direction="row" justify="center">
                            <Grid item xs={12} sm={10} lg={6}>
                                <ChartCard title= { chartTitle } chart = { chart } />
                            </Grid>
                            <Grid item xs={12} sm={10} lg={6}>
                                <ProjectsCard title={ projectsTitle } projects={ projects } />
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