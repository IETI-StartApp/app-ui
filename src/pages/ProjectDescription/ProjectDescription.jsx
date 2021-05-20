import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Video} from '../../components/Video/Video';
import Navigation from "../../components/Navbar/Navigation";
import {BarInfo, InformacionFinazas, ProjectInfo} from "../../components";
import {Comment} from '../../components/Comment/CommentForm';
import useWindowDimensions from "../../hooks/useWindowDimensions";

export const ProjectDescription = (props) => {
    const {country, description, name, image, finance, video, user} = (props.location && props.location.state) || {};
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
    const {height, width} = useWindowDimensions() || {};
    return (
        <>
            <Navigation/>
            <br/>
            <div style={{paddingLeft: (width < 960 ? 0 : width * 0.22), paddingTop: (height * 0.1)}}>
                <ProjectInfo nombreProyecto={name} nombreUsuario={user.firstName + " " + user.lastName}
                             fotoPerfil={image}/>
                <Grid container alignItems="center">
                    <Grid item xs={7}>
                        <Video video={video} ancho='100%' alto='460px'/>
                        <BarInfo pais={country} texto={description}/>
                    </Grid>
                    <Grid item xs={5}>
                        <InformacionFinazas
                            valor={formatter.format(finance.value)}
                            inversionistas={finance.investorNumber}
                            valoracion={formatter.format(finance.valuation)}
                            InversionMinima={formatter.format(finance.minimumInvestment)}
                            socios={finance.investorNumber}
                            fechaInicio={finance.startDate.substring(0, 10)}
                            FechaFin={finance.endDate.substring(0, 10)}/>
                    </Grid>
                </Grid>
                <Comment/>
            </div>


        </>
    );
};
