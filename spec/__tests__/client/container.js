import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// still need to make this folder when building the frontend.
import { NewsArticle , Container, Header, Thumbnail } from '../../../client/components';

describe('Container', () => {
  it('should render with no problems', () => {
    // TODO finish when buidling  frontend
    const component = renderer.create(<Container />);
    expect(component).toMatchSnapshot();
  })

  it('should contain multiple news objects for the company', () => {
    let articles = [
      {
        title: "article1"
      },
      {
        title: "article2"
      }
    ]
    const component = shallow(<Container articles={articles} />)
    expect(component.find(NewsArticle)).to.have.lengthOf(2)
  })

  it('renders other static components', () => {
    // TODO finish when buidling frontend
    const component = mount(<Container />)

    expect(component.find(NewsArticle)).not.toBeNull()
  })

  it('should have a "Show More" button', () => {
    // TODO finish when buidling  frontend
    expect(component.find('.show-more')).toBeDefined();
  })
})
