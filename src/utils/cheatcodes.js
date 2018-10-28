import KEY_CODES, { strToSequence } from './keycodes';

// ↑↑↓↓←→←→ba
export const KONAMI_CODE = [
  KEY_CODES.up,
  KEY_CODES.up,
  KEY_CODES.down,
  KEY_CODES.down,
  KEY_CODES.left,
  KEY_CODES.right,
  KEY_CODES.left,
  KEY_CODES.right,
  KEY_CODES.b,
  KEY_CODES.a,
];

// iddqd
export const DOOM_GODMODE = strToSequence('iddqd');

// aoe 2 - 1000 stone
export const QUARRY = strToSequence('quarry');

// nukular man
export const EC2_TROOPER = strToSequence('e=mc2 trooper');
