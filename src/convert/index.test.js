
import { code2uni, uni2code, uni2hex, uni2fsw, uni2swu, fsw2uni, swu2uni } from './';


it('should convert unicode code point to uni8 character', () => {
  expect(code2uni(0x1D800)).toBe('𝠀');
})

it('should convert uni8 character to unicode code point', () => {
  expect(uni2code('𝠀')).toBe(0x1D800);
})

it('should convert uni8 character to hex representation', () => {
  expect(uni2hex('𝠀')).toBe('1D800');
})

it('should convert uni8 character to fsw', () => {
  expect(uni2fsw('𝠀')).toBe('S10000');
})

it('should convert uni8 character to swu', () => {
  expect(uni2swu('𝠀')).toBe('񀀁');
})

it('should convert fsw to uni8 character', () => {
  expect(fsw2uni('S10000')).toBe('𝠀');
})

it('should convert swu to uni8 character', () => {
  expect(swu2uni('񀀁')).toBe('𝠀');
})
