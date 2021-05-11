import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Dashboard } from '../Dashboard/index';
import { ProjectsChart } from './ProjectsChart';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import CheckIcon from '@material-ui/icons/Check';

export const EntrepreneurDashboard = () => {
    const items = [
        { number: "5", description: "Proyectos Creados", icon: <StarBorderIcon fontSize="large" />, path: "/" },
        { number: "4.5M", description: "Capital recaudado", icon: <AttachMoneyIcon fontSize="large" />, path: "/dashboard" },
        { number: "17", description: "Socios", icon: <PermIdentityIcon fontSize="large" />, path: "/" },
        { number: "0", description: "Proyectos exitosos", icon: <CheckIcon fontSize="large" />, path: "/" }
    ];
    const projects = [
        {
            name: "Proyecto 1", 
            image:"https://www.binarias.org/wp-content/uploads/2020/12/tegnologia.jpeg", 
            finance: { value:15000000, valuation:20000000, startDate: "10/03/2021"}
        },
        {
            name: "Proyecto 2", 
            image:"https://s3-us-west-2.amazonaws.com/wp-mpro-blog/wp-content/uploads/2016/03/14133959/s3-blog-tecnologia-como-prioridad-min.png", 
            finance: { value:10000000, valuation:17500000, startDate: "12/02/2021"},
        },
        {
            name: "Proyecto 3", 
            image:"https://thelogisticsworld.com/wp-content/uploads/2020/02/empresario-analizando-informe-financiero-empresa-graficos-realidad-aumentada_34141-360.jpg", 
            finance: { value:8000000, valuation:12000000, startDate: "21/01/2021"},
        },
    ];

    return (
        <Dashboard items={ items } projects={ projects } chart={ <ProjectsChart /> } projectsTitle={ "Mis proyectos" } chartTitle={ "Mis proyectos: porcentaje financiado" } />
    );
}