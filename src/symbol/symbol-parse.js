
import { re } from './symbol-re';

/**
 * Function to parse symbol string to object
 * @function symbol.parse
 * @param {string} symbolString - a symbol string
 * @returns {object} elements of symbol string
 * @example
 * symbol.parse('𝠀')
 * 
 * return {
 *  'base': '𝠀',
 *  'fill': undefined,
 *  'rotation': undefined
 * }
 */
const parse = (symbolString) => {
  const regex = `^${re.full}`;
  const m = ((typeof symbolString === 'string') ? symbolString.match(new RegExp(regex)) : []) || [];
  return {
    'base': !m[1] ? undefined : m[1],
    'fill': !m[2] ? undefined : m[2],
    'rotation': !m[3] ? undefined : m[3]
  }
}

export { parse }
