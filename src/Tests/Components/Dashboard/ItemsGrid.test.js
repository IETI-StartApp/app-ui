import React from 'react';
import { ItemsGrid } from '../../../components/Dashboard/ItemsGrid';
import { shallow } from 'enzyme';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { CardActionArea } from '@material-ui/core/';

describe('Testing items grid', () => {

    const items = [{ number: "5", description: "Proyectos Creados", icon: <StarBorderIcon fontSize="large" />, path: "/" }];
    const wrapper = shallow(<ItemsGrid  items={ items } />)

    test('should items grid', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call a function', () => {
        const cardActionArea = wrapper.find(CardActionArea).at(0);
        const handleClick = jest.fn();
        cardActionArea.simulate("Click");
        expect(handleClick).toHaveBeenCalledTimes(0);
    });
})