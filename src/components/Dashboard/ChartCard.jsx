import React from 'react';
import { useStyles } from './styles';
import { Card, CardContent, Typography, Box } from '@material-ui/core/';

export const ChartCard = ({ title, chart}) => {
    const classes = useStyles();
    
    return (
        <Card variant="outlined" className={classes.cardChart}>
            <CardContent>
                <Typography className={classes.mainColor} variant="button" display="block">{ title }</Typography>
                <Box p={3}>
                    {
                        chart
                    }
                </Box>
            </CardContent>
        </Card>
    );
}