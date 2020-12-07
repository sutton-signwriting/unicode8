
import { re } from './symbol-re';

it('should have the full regular expression', () => {
  expect(re.full).toBe('((?:\uD836[\uDC00-\uDE8B]))((?:\uD836[\uDE9B-\uDE9F]))?((?:\uD836[\uDEA1-\uDEAF]))?')
});
