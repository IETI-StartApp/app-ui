import React from 'react';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Paper } from '@material-ui/core';
import { useStyles } from './styles';
import { Animation } from '@devexpress/dx-react-chart';

export const InvestmentsChart = () => {
    const classes = useStyles();
    const data = [
        {
            Month: "Diciembre", Total: 0,
        }, {
            Month: "Enero", Total: 0,
        }, {
            Month: "Febrero", Total: 0,
        }, {
            Month: "Marzo", Total: 700000,
        }, {
            Month: "Abril", Total: 1800000,
        }, {
            Month: "Mayo", Total: 1000000,
        },
    ];

    return (
        <>
            <Paper>
                <Chart
                    data={data}
                    className={classes.chart}
                >
                    <ArgumentAxis />
                    <ValueAxis />
                    <LineSeries valueField="Total" argumentField="Month" color="#950740"/>
                    <Animation />
                </Chart>
            </Paper>
        </>
    );
}