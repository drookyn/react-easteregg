import { CHEAT_CODES } from '../../src';

describe('cheatcodes', () => {
  describe('CHEAT_CODES', () => {
    it('exists', () => {
      expect(CHEAT_CODES).not.toBeUndefined();
    });

    it('contains all codes', () => {
      expect(CHEAT_CODES).toHaveProperty('KONAMI_CODE');
      expect(CHEAT_CODES).toHaveProperty('DOOM_GODMODE');
      expect(CHEAT_CODES).toHaveProperty('QUARRY');
      expect(CHEAT_CODES).toHaveProperty('EC2_TROOPER');
    });
  });

  describe('KONAMI_CODE', () => {
    it('exists', () => {
      expect(CHEAT_CODES.KONAMI_CODE).not.toBeUndefined();
    });
    it('is right', () => {
      expect(CHEAT_CODES.KONAMI_CODE).toEqual([38, 38, 40, 40, 37, 39, 37, 39, 66, 65]);
    });
  });

  describe('DOOM_GODMODE', () => {
    it('exists', () => {
      expect(CHEAT_CODES.DOOM_GODMODE).not.toBeUndefined();
    });
    it('is right', () => {
      expect(CHEAT_CODES.DOOM_GODMODE).toEqual([73, 68, 68, 81, 68]);
    });
  });

  describe('QUARRY', () => {
    it('exists', () => {
      expect(CHEAT_CODES.QUARRY).not.toBeUndefined();
    });
    it('is right', () => {
      expect(CHEAT_CODES.QUARRY).toEqual([81, 85, 65, 82, 82, 89]);
    });
  });

  describe('EC2_TROOPER', () => {
    it('exists', () => {
      expect(CHEAT_CODES.EC2_TROOPER).not.toBeUndefined();
    });
    it('is right', () => {
      expect(CHEAT_CODES.EC2_TROOPER)
        .toEqual([69, 187, 77, 67, 50, 32, 84, 82, 79, 79, 80, 69, 82]);
    });
  });
});
