
import { parse, compose } from './';

it('should pass', () => {
  expect(true).toBe(true);
});

it('should parse to object and back to original string', () => {
  let symbols = [
    '𝠀','𝠀𝪛𝪡','𝠀𝪛','𝠀𝪡'
  ];
  symbols.map((test) => {
    expect(compose(parse(test))).toBe(test);
  })
})