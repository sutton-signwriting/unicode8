
import { compose } from './string-compose';

it('should compose string', () => {
  expect(compose(['𝠀','𝠁'])).toEqual('𝠀𝠁');
})

