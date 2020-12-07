
/**
 * Object of regular expressions for style strings
 * 
 *   { full }
 * @alias string.re
 * @type {object}
 */

import { re as reSymbol} from '../symbol/symbol-re';
 let re = {
  'full': `(?:${reSymbol.full})+`
}


export { re }
