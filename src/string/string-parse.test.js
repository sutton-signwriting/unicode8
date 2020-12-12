
import { parse } from './string-parse';
import { fsw2uni } from '../convert';

let u = fsw2uni("S10000");
let uF = fsw2uni("S10010");
let uR = fsw2uni("S10001");
let uFR = fsw2uni("S10011");

it('should parse strings with one symbol', () => {
  expect(parse(u)).toEqual([u]);
  expect(parse(uF)).toEqual([uF]);
  expect(parse(uR)).toEqual([uR]);
  expect(parse(uFR)).toEqual([uFR]);
})

it('should parse strings with two symbols', () => {
  expect(parse(u + uF)).toEqual([u, uF]);
  expect(parse(u + uR)).toEqual([u, uR]);
  expect(parse(u + uFR)).toEqual([u, uFR]);
  expect(parse(uF + u)).toEqual([uF, u]);
  expect(parse(uF + uR)).toEqual([uF, uR]);
  expect(parse(uF + uFR)).toEqual([uF, uFR]);
  expect(parse(uR + u)).toEqual([uR, u]);
  expect(parse(uR + uF)).toEqual([uR, uF]);
  expect(parse(uR + uFR)).toEqual([uR, uFR]);
  expect(parse(uFR + u)).toEqual([uFR, u]);
  expect(parse(uFR + uR)).toEqual([uFR, uR]);
  expect(parse(uFR + u)).toEqual([uFR, u]);
})

it('should parse strings with many symbols', () => {
  expect(parse(u + uF + uR + uFR + u + uFR + uF + uR)).toEqual([u, uF, uR, uFR, u, uFR, uF, uR]);
})



it('should parse without breaking on bad data', () => {
  expect(parse()).toEqual([]);
  expect(parse(undefined)).toEqual([]);
  expect(parse("S10000500x500-CZ5")).toEqual([]);
  expect(parse(['-Zx'])).toEqual([]);
  expect(parse({ "this": "that" })).toEqual([]);
})
