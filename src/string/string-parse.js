
import { re as reSymbol } from '../symbol/symbol-re';
import { re } from './string-re';

/**
 * Function to parse string of uni8 symbols to array
 * @function string.parse
 * @param {string} uni8String - a string of uni8 symbols
 * @returns {array} array of uni8 symbols
 * @example
 * string.parse('𝠀𝠁')
 * 
 * return ['𝠀','𝠁']
 */
const parse = (uni8String) => {
  const regex = `^(${re.full})`;
  const m = ((typeof uni8String === 'string') ? uni8String.match(new RegExp(regex)) : []) || [];

  return !m[1] ? [] : [...m[1].matchAll(new RegExp(reSymbol.full,'g'))].map(mm => mm[0]);
}

export { parse }
