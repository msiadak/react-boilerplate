import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('App', () => {
  it('should render', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});
