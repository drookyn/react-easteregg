import React from 'react';

import EasterEgg from '../src/components/EasterEgg/EasterEgg';
import { strToSequence } from '../src/utils';

const sequence = strToSequence('test');

class App extends React.PureComponent {
  state = { disabled: false };

  disableEasterEgg = () => {
    this.setState(() => ({ disabled: true }));
  }

  render() {
    const { disabled } = this.state;

    return (
      <EasterEgg
        sequence={sequence}
        disabled={disabled}
      >
        <button onClick={this.disableEasterEgg} type="button">It works!</button>
      </EasterEgg>
    );
  }
}

export default App;
