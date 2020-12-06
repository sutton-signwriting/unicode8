
import { uni2txt, uni2hex, uni2fsw, uni2swu, fsw2uni, swu2uni } from './';

it('should convert uni8 code point to text utf-16 encoded', () => {
  expect(uni2txt(parseInt('1D800',16))).toBe('𝠀');
})

it('should convert uni8 code point to hex representation', () => {
  expect(uni2hex(parseInt('1D800',16))).toBe('1D800');
})

it('should convert uni8 code point to fsw', () => {
  expect(uni2fsw(parseInt('1D800',16))).toBe('S10000');
})

it('should convert uni8 code point to swu', () => {
  expect(uni2swu(parseInt('1D800',16))).toBe('unknown');
})

it('should convert fsw to uni8 code point', () => {
  expect(fsw2uni('S10000')).toBe(parseInt('1D800',16));
})

it('should convert swu to uni8 code point', () => {
  expect(swu2uni('X')).toBe(parseInt('1D800',16));
})
