import React from 'react';
import {styles} from './styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
/*<BarInfo link ='Link de la pagina' pais = 'Pais del proyecto' texto ='descripcion  del proyecto'/>*/
export const BarInfo = ({
                          link,
                          pais,
                          texto,
}
) => {
  const classes = styles();
  return(
    <>
    <Paper className={classes.paper}>
      <Grid container spacing={0}>
        <Grid item xs = {2} >
          <a href = {link} className={classes.purpura}>Sitio web</a>
        </Grid>
        <Grid item xs= {2} className={classes.normal}>
          {pais}
        </Grid>
      </Grid>
    </Paper>
    <Grid container spacing= {0}  className={classes.paper}>
    <text className={classes.descripcion}>
      {texto}
    </text>
    </Grid>
    </>
  );
};

