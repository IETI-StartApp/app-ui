import React from 'react'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styleCard } from "./styleCard"


export const Card = ({ userImage, userType, userDescription, arrowImage }) => {
    const classes = styleCard();
    return (
        <div>
            <div className={classes.root2}>
                <Paper className={classes.papero}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                <img className={classes.img} alt="complex" src={userImage} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {userType}
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary">
                                        {userDescription}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src={arrowImage} />
                                </ButtonBase>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}


