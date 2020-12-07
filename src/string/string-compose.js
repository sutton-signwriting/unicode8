
import { re } from './string-re';

/**
 * Function to compose uni8 string from array
 * @function string.compose
 * @param {array} stringArray - an array of uni8 symbols
 * @returns {string} string of uni8 symbols
 * @example 
 * string.compose(['𝠀','𝠁'])
 *
 * return '𝠀𝠁'
 */
const compose = (stringArray) => {
  if (!Array.isArray(stringArray)) return undefined;
  return stringArray.join('');
}

export { compose }
