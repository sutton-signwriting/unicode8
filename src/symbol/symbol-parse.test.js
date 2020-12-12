
import { parse } from './symbol-parse';

it('should parse symbol strings for base', () => {
  expect(parse('𝠀')).toEqual({
    'base': '𝠀'
  });
})


it('should parse symbol strings', () => {
  expect(parse('𝠀𝪛')).toEqual({'base': '𝠀','fill': '𝪛'});
})

it('should parse symbol strings', () => {
  expect(parse('𝠀𝪡')).toEqual({'base': '𝠀','rotation':'𝪡'});
})

it('should parse symbol strings for base with fill and rotation', () => {
  expect(parse('𝠀𝪛𝪡')).toEqual({'base': '𝠀','fill': '𝪛','rotation':'𝪡'});
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
