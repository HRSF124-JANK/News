import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Thumbnail from '../../../client/components/thumbnail.jsx';

describe('Thumbnail component', () => {
  it('should render with no problems', () => {
    const component = renderer.create(<Thumbnail />);
    expect(component).toMatchSnapshot();
  })

  it('should receive the thumbnail url from props', () => {
    expect(component.props().imageUrl).toBeDefined();
  })
})
