import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';

// still need to make this folder when building the frontend.
import { NewsArticle , Container, Header, Thumbnail } from '../../../client/components';

describe('Container', () => {
  it('should render with no problems', () => {
    const component = renderer.create(
      <Container
        data={[
          {
            source: "google",
            body: "lorem ipsum",
            title: "Twitter",
            thumbnail: "image.url",
            views: 932,
            date: Date.now
          }
        ]
      }  />
    );
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
    const component = mount(<Container data={articles} />)
    expect(component.find('NewsArticle').length).toBe(2)
  })

  it('renders other static components', () => {
    const component = mount(<Container />)

    expect(component.find(NewsArticle)).not.toBeNull()
  })
})
