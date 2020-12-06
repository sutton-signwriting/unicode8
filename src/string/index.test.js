
import { parse, compose } from './';

it('should pass', () => {
  expect(true).toBe(true);
});

it('should parse to object and back to original string', () => {
  let strings = [
    '1D800'
  ];
  strings.map((test) => {
    expect(compose(parse(test))).toBe(test);
  })
})