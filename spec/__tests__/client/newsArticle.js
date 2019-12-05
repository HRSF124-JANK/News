import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { NewsArticle , Container, Header, Thumbnail } from '../../../client/components';


describe('News Article Component', () => {
  const component = mount(<NewsArticle views={932} body="lorem ipsum" source="google" date={Date.now()} />)
  it('should render with no problems', () => {
    const snapshot = renderer.create(<NewsArticle />)
    expect(snapshot).toMatchSnapshot();
  })

  it('should render child components', () => {
    expect(component.find('Header')).not.toBeNull()
    expect(component.find('Thumbnail')).not.toBeNull()
  })

  it('should render views', () => {
    expect(component.find('NewsArticle').props().views).toBe(932)
  })

  it('should have body text', () => {
    expect(component.find('NewsArticle').props().body).toBeDefined();
  })

  it('should have a source', () => {
    expect(component.find('NewsArticle').props().source).toBeDefined();
  })

  it('should have a recently added timestamp', () => {
    expect(component.find('NewsArticle').props().date).toBeDefined();
  })
})
