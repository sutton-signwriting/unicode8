
import { parse } from './symbol-parse';

it('should parse symbol strings', () => {
  expect(parse('-')).toEqual({
  });
  expect(parse('𝠀')).toEqual({
    'base': '𝠀'
  });
})

it('should parse without breaking on bad data', () => {
  expect(parse()).toEqual({
  });
  expect(parse(undefined)).toEqual({
  });
  expect(parse("S10000500x500-CZ5")).toEqual({
  });
  expect(parse(['-Zx'])).toEqual({
  });
  expect(parse({ "this": "that" })).toEqual({
  });
})
