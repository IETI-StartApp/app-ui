import React from 'react';
import {Container, Grid} from '@material-ui/core';
import CardProject from './CardProject';
import {useStyles} from './styles';
import Navigation from "../Navbar/Navigation";

export function ProjectsGrid() {

    const classes = useStyles();
    const projects = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}];

    return (
        <>
            <Navigation/>
            <Container className={classes.cardGrid}>
                <Grid
                    container
                    spacing={4}
                >
                    {
                        projects.map(project => (
                            <Grid item xs={12} sm={6} md={4} key={project.id}>
                                <CardProject/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>

    );

}
