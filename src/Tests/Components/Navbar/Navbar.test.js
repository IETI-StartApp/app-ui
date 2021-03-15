import { mount } from "enzyme";
import Navbar from "../../../components/Navbar"; // mount instead of `shallow` here

it('should render', () => {
    const component = mount(<Navbar handleDrawerToggle={()=>{}} signOut={()=>{}} />); // `mount` here as well
    const wrapper = component.find('myClassName');
    expect(wrapper.length).toBe(0);
});


