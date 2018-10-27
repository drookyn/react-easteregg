import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { EasterEgg } from '../../src/components';

describe('<EasterEgg />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const component = shallow(<EasterEgg />);
      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
