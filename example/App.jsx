import React from 'react';

import EasterEgg from '../src/components/EasterEgg/EasterEgg';
import { strToSequence } from '../src/utils';
import Content from './Content';

const sequence = strToSequence('test');

const App = () => (
  <EasterEgg
    sequence={sequence}
    callback={() => console.log('EasterEgg show')}
    onShow={() => console.log('EasterEgg show')}
    onReset={() => console.log('EasterEgg reset')}
    onDisable={() => console.log('EasterEgg disable')}
  >
    <Content />
  </EasterEgg>
);

export default App;
