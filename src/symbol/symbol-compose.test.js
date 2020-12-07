
import { compose } from './symbol-compose';

it('should compose symbol strings', () => {
  expect(compose({})).toBe(undefined);
  expect(compose({'base': '𝠀'})).toBe('𝠀');
})

it('should compose without breaking on bad data', () => {
  expect(compose()).toBe(undefined);
  expect(compose({
    'other': true
  })).toBe(undefined);
})
