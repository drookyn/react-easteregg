const KEY_CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  '⇧': 16,
  control: 17,
  ctrl: 17,
  ctl: 17,
  alt: 18,
  option: 18,
  'pause/break': 19,
  'caps lock': 20,
  esc: 27,
  space: 32,
  'page up': 33,
  'page down': 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  delete: 46,
  command: 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
  windows: 91,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  pause: 19,
  break: 19,
  caps: 20,
  return: 13,
  escape: 27,
  spc: 32,
  spacebar: 32,
  pgup: 33,
  pgdn: 34,
  ins: 45,
  del: 46,
  cmd: 91,
  ' ': 32,
};

// lower case chars
for (let i = 97; i < 123; i += 1) {
  KEY_CODES[String.fromCharCode(i)] = i - 32;
}

// numbers
for (let i = 48; i < 58; i += 1) {
  KEY_CODES[i - 48] = i;
}

// function keys
for (let i = 1; i < 13; i += 1) {
  KEY_CODES[`f${i}`] = i + 111;
}

// numpad keys
for (let i = 0; i < 10; i += 1) {
  KEY_CODES[`numpad ${i}`] = i + 96;
}

// reverse
Object.entries(KEY_CODES).forEach(([key, value]) => {
  if (!KEY_CODES[value]) KEY_CODES[value] = key;
});

export const strToSequence = (str) => {
  if (typeof str !== 'string') return [];
  return str.split('').map(c => KEY_CODES[c]);
};

export const getAllByKeyCode = keyCode => (
  Object.entries(KEY_CODES)
    .reduce((acc, [key, value]) => {
      if (value === keyCode) acc.push(key);
      return acc;
    }, [])
);

export default KEY_CODES;
