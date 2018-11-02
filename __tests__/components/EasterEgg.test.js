import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { spy } from 'sinon';

import { EasterEgg } from '../../src/components';
import { CHEAT_CODES, KEY_CODES, strToSequence } from '../../src/utils';

describe('<EasterEgg />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<EasterEgg />);
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });

  describe('defaultProps', () => {
    test('default sequence is konami code', () => {
      const wrapper = shallow(<EasterEgg />);
      const { props } = wrapper.instance();
      expect(props.sequence).toEqual(CHEAT_CODES.KONAMI_CODE);
    });

    test('default target is window', () => {
      const wrapper = shallow(<EasterEgg />);
      const { props } = wrapper.instance();
      expect(props.target).toEqual('window');
    });
  });

  describe('initialState', () => {
    test('index is 0', () => {
      const wrapper = shallow(<EasterEgg />);
      const { initialState } = wrapper.instance();
      expect(initialState.index).toEqual(0);
    });

    test('show is false', () => {
      const wrapper = shallow(<EasterEgg />);
      const { initialState } = wrapper.instance();
      expect(initialState.show).toEqual(false);
    });

    test('disabled is false', () => {
      const wrapper = shallow(<EasterEgg />);
      const { initialState } = wrapper.instance();
      expect(initialState.disabled).toEqual(false);
    });
  });

  describe('functionality', () => {
    const map = {};

    beforeEach(() => {
      window.addEventListener = jest.fn((event, cb) => {
        map[event] = cb;
      });
    });

    test('do not increment index on wrong key', () => {
      const wrapper = mount(<EasterEgg />);
      map.keyup({ key: KEY_CODES[CHEAT_CODES.DOOM_GODMODE[0]] });

      const { state, initialState } = wrapper.instance();
      expect(state.index).toEqual(initialState.index);
    });

    test('increment index on right key', () => {
      const wrapper = mount(<EasterEgg />);
      map.keyup({ key: KEY_CODES[CHEAT_CODES.KONAMI_CODE[0]] });

      const { state, initialState } = wrapper.instance();
      expect(state.index).toEqual(initialState.index + 1);
    });

    test('callback gets called, children are shown on success', () => {
      const callback = spy();
      const wrapper = mount(
        <EasterEgg callback={callback}>
          <span className="success">Noice!</span>
        </EasterEgg>,
      );

      CHEAT_CODES.KONAMI_CODE.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      wrapper.update();
      const { state } = wrapper.instance();
      expect(state.index).toEqual(CHEAT_CODES.KONAMI_CODE.length - 1);
      expect(state.show).toEqual(true);
      expect(callback.calledOnce).toBe(true);
      expect(wrapper.find('.success').exists()).toBeTruthy();
    });

    test('onShow gets called, children are shown on success', () => {
      const callback = spy();
      const wrapper = mount(
        <EasterEgg onShow={callback}>
          <span className="success">Noice!</span>
        </EasterEgg>,
      );

      CHEAT_CODES.KONAMI_CODE.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      wrapper.update();
      const { state } = wrapper.instance();
      expect(state.index).toEqual(CHEAT_CODES.KONAMI_CODE.length - 1);
      expect(state.show).toEqual(true);
      expect(callback.calledOnce).toBe(true);
      expect(wrapper.find('.success').exists()).toBeTruthy();
    });

    test('state reset after timeout', () => {
      const timeout = 500;
      const wrapper = mount(
        <EasterEgg timeout={timeout}>
          <span className="success">Noice!</span>
        </EasterEgg>,
      );

      CHEAT_CODES.KONAMI_CODE.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          wrapper.update();
          const { state, initialState } = wrapper.instance();
          expect(state).toEqual(initialState);
          expect(wrapper.find('.success').exists()).toBeFalsy();
        }, timeout);
      });
    });

    test('quarry success', () => {
      const wrapper = mount(<EasterEgg sequence={CHEAT_CODES.QUARRY} />);

      CHEAT_CODES.QUARRY.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      const { state } = wrapper.instance();
      expect(state.index).toEqual(CHEAT_CODES.QUARRY.length - 1);
      expect(state.show).toEqual(true);
    });

    test('godmode success', () => {
      const wrapper = mount(<EasterEgg sequence={CHEAT_CODES.DOOM_GODMODE} />);

      CHEAT_CODES.DOOM_GODMODE.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      const { state } = wrapper.instance();
      expect(state.index).toEqual(CHEAT_CODES.DOOM_GODMODE.length - 1);
      expect(state.show).toEqual(true);
    });

    test('e=mc2 trooper success', () => {
      const wrapper = mount(<EasterEgg sequence={CHEAT_CODES.EC2_TROOPER} />);

      CHEAT_CODES.EC2_TROOPER.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      const { state } = wrapper.instance();
      expect(state.index).toEqual(CHEAT_CODES.EC2_TROOPER.length - 1);
      expect(state.show).toEqual(true);
    });

    test('myCustomSequence', () => {
      const sequence = strToSequence('myCustomSequence');
      const wrapper = mount(<EasterEgg sequence={sequence} />);

      sequence.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      const { state } = wrapper.instance();
      expect(state.index).toEqual(sequence.length - 1);
      expect(state.show).toEqual(true);
    });

    test('!"§$%&/()=?`,.-;:_#+*\'', () => {
      const sequence = strToSequence('!"§$%&/()=?`,.-;:_#+*\'');
      const wrapper = mount(<EasterEgg sequence={sequence} />);

      sequence.forEach(code => map.keyup({ key: KEY_CODES[code] }));

      const { state } = wrapper.instance();
      expect(state.index).toEqual(sequence.length - 1);
      expect(state.show).toEqual(true);
    });
  });
});
