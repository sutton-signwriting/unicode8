
import { compose } from './symbol-compose';

it('should compose symbol strings for base', () => {
  expect(compose({'base': '𝠀'})).toBe('𝠀');
})

it('should compose symbol strings for base with fill', () => {
  expect(compose({'base': '𝠀','fill': '𝪛'})).toBe('𝠀𝪛');
})

it('should compose symbol strings for base with rotation', () => {
  expect(compose({'base': '𝠀','rotation':'𝪡'})).toBe('𝠀𝪡');
})

it('should compose symbol strings for base with fill and rotation', () => {
  expect(compose({'base': '𝠀','fill': '𝪛','rotation':'𝪡'})).toBe('𝠀𝪛𝪡');
})

it('should compose without breaking on bad data', () => {
  expect(compose({})).toBe(undefined);
  expect(compose()).toBe(undefined);
  expect(compose({
    'other': true
  })).toBe(undefined);
})
