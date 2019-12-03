import App from '../../../client/index.jsx';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  it('i hope this works', () => {
    const rend = shallow(<App />);
    expect(rend.find('div').text()).toEqual('asdf');
  })
})
