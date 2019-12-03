import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../../../client/components/header.jsx';


describe('Header Component', () => {
  it('should render with no problems', () => {
    // TODO finish when buidling  frontend
    const component = renderer.create(<Header />)
    expect(component).toMatchSnapshot();
  })

  it('should take in a prop for article titles as the header', () => {
    // fill in the enzyme/ react renderer create after the component is built
    expect(component.props().articles).to.be.lengthOf(3);
    expect(component.props().articles[0].title).toBeDefined();
  })

  it('should be bolded', () => {
    // fill in the enzyme/ react renderer create after the component is built
    expect(component.find('.title').hasClass('bold')).to.equal(true)
  })
})
