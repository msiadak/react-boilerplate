import React from 'react';
import { shallow } from 'enyzme';

import App from '../App';

describe('App', () => {
  it('should render', () => {
    expect(shallow(<App />).exists()).toBe(true);
  });
});
