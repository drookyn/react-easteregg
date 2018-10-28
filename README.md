# react-easteregg

## Installation

### with npm:

```sh
npm install --save react-easteregg
```

### with yarn:

```sh
yarn add react-easteregg
```

## Basic Usage

Just import the component and you are good to go. The default used sequence is the konami code `↑↑↓↓←→←→ba`.

```javascript
import EasterEgg from 'react-easteregg';

// ...

render() {
  return (
    <EasterEgg>
      <span>It works!</span>
    </EasterEgg>
  );
}

// ...
```

## Advanced Usage

```javascript
import EasterEgg, { strToSequence } from 'react-easteregg';

// ...

state = { disabled: false };

disableEasterEgg = () => {
  this.setState(() => ({ disabled: true }));
}

itWorks() {
  alert('It works!');
}

render() {
  const { disabled } = this.state;
  const sequence = strToSequence('myCustomSequence');

  return (
    <EasterEgg
      sequence={sequence}
      callback={this.itWorks}
      disabled={disabled}
    >
      <span onClick={this.disableEasterEgg}>It works!</span>
    </EasterEgg>
  );
}

// ...
```

## Props
| Key       | Value          | Default     | Required | Description                                                                                           |
|-----------|----------------|:-----------:|:--------:|-------------------------------------------------------------------------------------------------------|
| sequence  | array          | [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]   | No       | An array of integer representing the sequence of keyCodes to listen to |
| children  | node           | null        | No       | A component to render when the user successfully entered the code                                     |
| callback  | function       | null        | No       | A callback triggered when the user successfully entered the code                                      |
| disable   | boolean        | false       | No       | A boolean to hide the easter egg                                                                      |
| target    | string\|node    | window      | No       | A string (window|document) or node to bind the keyUp listener to                                      |

## Dependencies
This project uses [react-event-listener](https://www.npmjs.com/package/react-event-listener) to bind event listeners.

## Code Style
100% [airbnb javascript (react)](https://github.com/airbnb/javascript/tree/master/react) styleguide

## Commands
- Test the component and helper functions

  ```javascript
  npm test
  ```

- Test the component and helper functions (with coverage)

  ```javascript
  npm run test:coverage
  ```

## License

MIT
