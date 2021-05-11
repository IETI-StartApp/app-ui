import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


export const ProjectsChart = () => {
    const data= [
      {name: "Proyecto 1", financed: 75}, 
      {name: "Proyecto 2", financed: 57}, 
      {name: "Proyecto 3", financed: 67},
      {name: "Proyecto 4", financed: 17},
      {name: "Proyecto 5", financed: 2},
    ];

    return (
      <Paper>
        <Chart
          data={data}
        >
          <ArgumentAxis />
          <ValueAxis />
          <BarSeries
            barWidth={0.3}
            valueField="financed"
            argumentField="name"
            color="#950740"
          />
          <Animation />
        </Chart>
      </Paper>
    );
}