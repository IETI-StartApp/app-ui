import React from 'react';
import { Card, CardContent, Typography, GridList, GridListTile } from '@material-ui/core/';
import CardProject from '../ProjectItems/CardProject';
import { useStyles } from './styles';

export const ProjectsCard = ({ title, projects }) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" className={classes.projects}>
            <CardContent>
                <Typography className={classes.mainColor} variant="button" display="block">{ title }</Typography>
                <div className={classes.rootProjects}>
                    <GridList className={classes.gridList}>
                        {projects.map((project) => (
                            <GridListTile className={classes.gridListTile}>
                                <CardProject project={project} />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </CardContent>
        </Card>
    );
}