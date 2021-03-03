import React from 'react';
import ReactPlayer from 'react-player';
import Grid from '@material-ui/core/Grid';

//<Video video = "Link del video" ancho='Ancho' alto='Alto'/>

export const Video = ({
                              video,
                              ancho,
                              alto,
}) => {
  return(
    <>
    <Grid container spacing={0} justify="center" alignItems="flex-start" direction = "row">
      <Grid item xs = {9}>
        <ReactPlayer
          url= {video} 
          className='react-player'
          width={ancho}
          height= {alto}
        />
      </Grid>
    </Grid>
      </>
  );
};
