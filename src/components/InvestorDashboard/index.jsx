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
            name: "Proyecto 4", 
            image:"https://fundacioncompartir.org/sites/default/files/la-nueva-tecnologia-que-esta-moviendo-al-mundo.jpg", 
            finance: { value:15500000, valuation:30000000, startDate: "11/03/2021"}
        },
        {
            name: "Proyecto 5", 
            image:"https://i1.wp.com/tiempodenegocios.com/wp-content/uploads/2019/05/5798-750x406.jpg", 
            finance: { value:8000000, valuation:18000000, startDate: "15/02/2021"},
        },
        {
            name: "Proyecto 6", 
            image:"https://assets.entrepreneur.com/content/3x2/2000/tecnologia16.jpg", 
            finance: { value:8550000, valuation:12500000, startDate: "25/01/2021"},
        },
    ];


    return (
        <Dashboard items={ items } projects={ projects } chart={ <InvestmentsChart /> } projectsTitle={ "Oportunidades de inversión" } chartTitle={ " Inversiones en los últimos 6 meses" } />
    );
}