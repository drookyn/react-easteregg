import React from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';

import { KEY_CODES, CHEAT_CODES, getAllByKeyCode } from '../../utils';

/**
 * EasterEgg component
 * @extends {React.PureComponent}
 */
export default class EasterEgg extends React.PureComponent {
  static propTypes = {
    /** Array of keycodes to check against. */
    sequence: PropTypes.arrayOf(PropTypes.number.isRequired),
    /** Function, which get called on success. */
    callback: PropTypes.func,
    /** Children, which get rendered on success. */
    children: PropTypes.node,
    /** To render, or not to render. */
    disabled: PropTypes.bool,
    /** On which target the event should be bound. */
    target: PropTypes.oneOfType([
      PropTypes.oneOf(['window', 'document']),
      PropTypes.node,
    ]),
  };

  static defaultProps = {
    /** ↑↑↓↓←→←→BA */
    sequence: CHEAT_CODES.KONAMI_CODE,
    callback: null,
    children: false,
    disabled: false,
    target: 'window',
  };

  initialState = { index: 0, show: false };

  state = this.initialState;

  checkKeyStroke = (event) => {
    const { sequence, callback } = this.props;
    const { index, show } = this.state;
    const { keyCode, key } = event;
    const code = KEY_CODES[key] || keyCode;

    if (show || !code) return;

    if (code === sequence[index]) {
      if (sequence.length <= index + 1) {
        this.setState(() => ({ show: true }));
        if (typeof callback === 'function') callback();
      } else {
        this.setState(state => ({ index: state.index + 1 }));
      }
    } else {
      this.setState(() => this.initialState);
    }
  }

  handleKeyStroke = (event = window.event) => {
    const {
      shiftKey,
      altKey,
      ctrlKey,
      key,
    } = event;

    const allShiftCodes = getAllByKeyCode(KEY_CODES.shift);
    const allAltCodes = getAllByKeyCode(KEY_CODES.alt);
    const allCtrlCodes = getAllByKeyCode(KEY_CODES.control);

    if (
      !(this.lastShiftKey && allShiftCodes.includes(key.toLowerCase()))
      && !(this.lastAltKey && allAltCodes.includes(key.toLowerCase()))
      && !(this.lastCtrlKey && allCtrlCodes.includes(key.toLowerCase()))
    ) {
      this.checkKeyStroke(event);
    }

    this.lastShiftKey = shiftKey;
    this.lastAltKey = altKey;
    this.lastCtrlKey = ctrlKey || allCtrlCodes.includes(key.toLowerCase());
  }

  render() {
    const { disabled, children, target } = this.props;
    const { show } = this.state;

    return (
      <>
        <EventListener
          target={target}
          onKeyUp={this.handleKeyStroke}
        />
        {
          show && !disabled && children
        }
      </>
    );
  }
}
