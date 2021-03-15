import React from 'react';
import './styles.js'
import { Titulo, Emprendedor} from './styles'
import Grid from '@material-ui/core/Grid';
import { Avatar } from '@material-ui/core';

/*<InformacioProyecto nombreProyecto = "Nombre del proyecto" nombreUsuario = "Nombre del emprendedor" fotoPerfil = 'Ruta de la foto de perfil'/>*/
export const InformacioProyecto = ({
                                    fotoPerfil,
                                    nombreProyecto,
                                    nombreUsuario,
}) => {
  return(
    <div>
      <Grid container spacing={0} justify="center" alignItems="flex-start">
        <Grid item xs={1}>
          <Avatar variant = 'square'src={fotoPerfil}/> 
        </Grid>
        <Grid item xs={8}>
            <Titulo>
              <text>{nombreProyecto}</text>
            </Titulo>
        </Grid>
        <Grid item xs={1}/>
        <Grid item xs={8}>
          <Emprendedor>
            <text >{nombreUsuario}</text>
          </Emprendedor>
        </Grid>
      </Grid>
    </div>
  );
}

