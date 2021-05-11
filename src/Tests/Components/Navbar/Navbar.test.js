import Navbar from '../../../components/Navbar/index';
import { IconButton, Button} from '@material-ui/core';
import { shallow } from 'enzyme';

describe('Testing navbar', () => {

    const handleDrawerToggle = jest.fn();

    const wrapper = shallow(<Navbar handleDrawerToggle={handleDrawerToggle}/>)

    test('should load navbar ', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should call handleDrawerToggle function', () => {
        const iconButton = wrapper.find(IconButton).at(0);
        iconButton.simulate("Click");
        expect( handleDrawerToggle ).toHaveBeenCalled();
    });

    test("should load 2 buttons", () => {
        const button1 = wrapper.find(Button).at(0);
        const button2 = wrapper.find(Button).at(0);
        expect( button1 ).toBeDefined();
        expect( button2 ).toBeDefined();
    });

})