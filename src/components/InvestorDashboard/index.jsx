import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { Dashboard } from '../Dashboard/index';
import { InvestmentsChart } from './InvestmentsChart';

export const InvestorDashboard = () => {
    const items = [
        { number: "4", description: "Proyectos Financiados", icon: <StarBorderIcon fontSize="large" />, path: "/" },
        { number: "3.5M", description: "Capital invertido", icon: <AttachMoneyIcon fontSize="large" />, path: "/dashboard" },
        { number: "1000", description: "Oportunidades de inversión ", icon: <TrendingUpIcon fontSize="large" />, path: "/" },
        { number: "2", description: "Proyectos guardados", icon: <BookmarkBorderIcon fontSize="large" />, path: "/" }
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
        <Dashboard 
            items={ items }
            projects={ projects }
            chart={ <InvestmentsChart /> }
            projectsTitle={ "Oportunidades de inversión" }
            chartTitle={ " Inversiones en los últimos 6 meses" }
        />
    );
}