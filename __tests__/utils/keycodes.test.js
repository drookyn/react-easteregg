import { KEY_CODES, strToSequence, CHEAT_CODES } from '../../src';

describe('keycodes', () => {
  describe('KEY_CODES', () => {
    it('exists', () => {
      expect(KEY_CODES).not.toBeUndefined();
    });
  });

  describe('strToSequence', () => {
    it('exists', () => {
      expect(strToSequence).not.toBeUndefined();
    });

    it('do not crash on not strings', () => {
      expect(strToSequence()).toEqual([]);
    });

    it('to work', () => {
      expect(strToSequence('quarry')).toEqual(CHEAT_CODES.QUARRY);
      expect(strToSequence('iddqd')).toEqual(CHEAT_CODES.DOOM_GODMODE);
      expect(strToSequence('e=mc2 trooper')).toEqual(CHEAT_CODES.EC2_TROOPER);
    });
  });
});
