
/**
 * Object of regular expressions for string of symbols
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
