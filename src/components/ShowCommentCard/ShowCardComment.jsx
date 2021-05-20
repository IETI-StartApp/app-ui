import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardContent, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    
    roote: {
        display: 'flex',
        flexDirection: 'column',
        width: 500,
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export const ShowCardComment = ({author, comment, qualifier}) => {
    console.log(author, comment, qualifier)
    const classes = useStyles();
    return (
        <Grid container direction="row" justify="center" alignItems="start" spacing={5} className={classes.cardGrid}>
            <Grid item xs={6} sm={6}>
                <Card className={classes.root}>
                    <div className={classes.details}>
                        <CardContent className={classes.content}>
                            <Grid item xs={6} sm={6}>
                                {author}
                                <Grid item xs={3} sm={6}>
                                <div className={classes.roote}>
                                <Rating align-content="center" size="large" name="read-only" readOnly precision={1} value={qualifier}  />
                                </div>
                                </Grid>
                            </Grid>
                            <Grid item xs={9} sm={7}>
                            <Typography variant="body" color="textSecondary">
                                {comment}
                            </Typography>
                            </Grid>
                        </CardContent>
                    </div>
                </Card>
            </Grid>
        </Grid>
    );
}