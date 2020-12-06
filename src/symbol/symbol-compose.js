
import { re } from './symbol-re';

/**
 * Function to compose symbol string from object
 * @function symbol.compose
 * @param {object} symbolObject - an object of symbol parts
 * @param {string} symbolObject.base - base character for symbol
 * @param {string} symbolObject.fill - fill character for symbol
 * @param {string} symbolObject.rotation - rotation character for symbol
 * @returns {string} symbol string 
 * @example 
 * symbol.compose({
 *  'base': '𝠀'
 * })
 *
 * return '𝠀'
 */
const compose = (symbolObject) => {
  if (typeof symbolObject !== 'object' || symbolObject === null) return undefined;

  return symbolObject.base?symbolObject.base:'' + symbolObject.base?symbolObject.fill:'' + symbolObject.base?symbolObject.rotation:'';
}

export { compose }
