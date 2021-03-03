import React from 'react';
import Grid from '@material-ui/core/Grid';
import {InformacioProyecto} from '../../components/InformacioProyecto/InformacioProyecto';
import {Video} from '../../components/Video/Video';
import { BarInfo } from "../../components/BarInfo/BarInfo";
import {InformacionFinazas} from '../../components/InformacionFinazas/InformacionFinazas';

export const ProjectDescription = () => {
  const json={
      "nombre": "WI buckets",
      "imagen": "https://cdn.discordapp.com/attachments/471909299753451523/814307715815309352/unknown.png",
      "emprendedor": "Sergio Alejandro",
      "video": "https://www.youtube.com/watch?v=T2xLJ-rU3wQ",
      "link": "https://en.wikipedia.org/wiki/Bucket",
      "pais": "Colombia",
      "descripcion": "Por una ciudad limpia, ordenada e inteligente"
  }
  const finanzas= {
        "valor": "$1.000.000",
        "numeroInversionistas": "8",
        "valoracion": "50.000",
        "inversionMinima": "30.000",
        "socios": "465",
        "fechaInicio": "25/01/2017",
        "fechaFin": "24/02/2022"
    }
    const {nombre, imagen, emprendedor, video, link, pais, descripcion} = json;
   
    return (
      <>
        <InformacioProyecto nombreProyecto = {nombre} nombreUsuario = {emprendedor} fotoPerfil = {imagen}/>
        <Grid container alignItems="center" alignItems="flex-start">
          <Grid item xs={7}>
            <Video video = {video} ancho='100%' alto='460px'/>
            <BarInfo link = {link} pais = {pais} texto = {descripcion}/>
          </Grid>
          <Grid item xs={5}>
          <InformacionFinazas 
            valor = {finanzas.valor}  
            inversionistas = {finanzas.numeroInversionistas} 
            valoracion = {finanzas.valoracion} 
            InversionMinima ={finanzas.inversionMinima} 
            socios = {finanzas.socios} 
            fechaInicio = {finanzas.fechaInicio} 
            FechaFin = {finanzas.fechaFin}/>
          </Grid> 
        </Grid>
        
      </>
    );
  };