import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, CardActionArea } from '@material-ui/core/';
import { useStyles } from './styles';
import { useHistory } from "react-router";

export const ItemsGrid = ({ items }) => {
    const classes = useStyles();
    const history = useHistory() || [];

    return (
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
    );
}