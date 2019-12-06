import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

import { NewsArticle , Container, Header, Thumbnail } from '../../../client/components';


describe('Header Component', () => {
  it('should render with no problems', () => {
    // TODO finish when buidling  frontend
    const component = renderer.create(<Header />)
    expect(component).toMatchSnapshot();
  })

  it('should take in a prop for article titles as the header', () => {
    const component = mount(<Header title={"asdf"} />)
    expect(component.props().title).toBe("asdf");
  })

  it('should be bolded', () => {
    // fill in the enzyme/ react renderer create after the component is built
    const component = mount(<Header />)
    expect(component.find('span').first().hasClass('bold')).toBe(true)
  })
})
