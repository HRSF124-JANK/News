import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NewsArticle from '../../../client/components/newsArticle.jsx';


describe('News Article Component', () => {
  it('should render with no problems', () => {
    const component = renderer.create(<NewsArticle />)
    expect(component).toMatchSnapshot();
  })

  it('should render child components', () => {
    // TODO during frontend
    expect(component.find(Header)).not.toBeNull()
    expect(component.find(Thumbnail)).not.toBeNull()
  })

  it('should render views', () => {
    expect(component.find('.views').html()).toBeGreaterThan(100)
  })

  it('should have body text', () => {
    expect(component.props().body).toBeDefined();
  })

  it('should have a source', () => {
    expect(component.props().source).toBeDefined();
  })

  it('should have a recently added timestamp', () => {
    expect(component.props().date).toBeDefined();
  })
})
