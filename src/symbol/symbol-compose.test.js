
import { compose } from './symbol-compose';

it('should compose symbol strings', () => {
  expect(compose({})).toBe('');
  expect(compose({'base': '𝠀'})).toBe('𝠀');
})

it('should compose without breaking on bad data', () => {
  expect(compose()).toBe('');
  expect(compose({
    'other': boolean
  })).toBe('');
})
