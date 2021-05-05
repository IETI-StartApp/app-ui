import React from 'react';
import {Container, Grid} from '@material-ui/core';
import CardProject from './CardProject';
import {useStyles} from './styles';
import Navigation from "../Navbar/Navigation";

export function ProjectsItems({projects}) {

    const classes = useStyles();

    return (
        <>
            <Navigation/>
            <Container className={classes.cardGrid}>
                <Grid
                    key={'project-items-key'}
                    container
                    spacing={4}
                >
                    {
                        projects.map(project => (
                            <Grid item xs={12} sm={6} md={4} key={project.id}>
                                <CardProject project={project}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </>

    );

}
