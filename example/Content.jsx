import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.PureComponent {
  static propTypes = {
    disableEasterEgg: PropTypes.func.isRequired,
    resetEasterEgg: PropTypes.func.isRequired,
  };

  render() {
    const { disableEasterEgg, resetEasterEgg } = this.props;

    return (
      <div>
        <button onClick={disableEasterEgg} type="button">Disable</button>
        <button onClick={resetEasterEgg} type="button">Reset</button>
      </div>
    );
  }
}

export default Content;
