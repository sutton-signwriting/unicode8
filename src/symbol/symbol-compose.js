
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
  const sym = (symbolObject.base?symbolObject.base:'') + (symbolObject.fill?symbolObject.fill:'') + (symbolObject.rotation?symbolObject.rotation:'');
  return sym?sym:undefined;
}

export { compose }
