import React from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import { useStyles } from './styles';

export default function ProgressGraph( { projectId }){

    const classes = useStyles();
    const progress = 70;

    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" value={ progress } className={classes.mainColor} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div">
                    {
                        `${Math.round(progress,)}%`
                    }
                </Typography>
            </Box>
        </Box>
    );
}