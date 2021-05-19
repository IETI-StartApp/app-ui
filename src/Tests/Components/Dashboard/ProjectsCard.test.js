import React from 'react';
import { ProjectsCard } from '../../../components/Dashboard/ProjectsCard';
import { shallow } from 'enzyme';

describe('Testing projects card', () => {
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

    const wrapper = shallow(<ProjectsCard  projects={ projects } title="projects" />)

    test('should projects card', () => {
        expect(wrapper).toMatchSnapshot();
    });

})