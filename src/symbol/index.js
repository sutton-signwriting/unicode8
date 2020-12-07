
/** The symbol module contains regular expressions and functions for parsing and composing SignWriting in Unicode 8 (uni8) characters.
 * @module symbol
 */

import { re } from './symbol-re';
import { parse } from './symbol-parse';
import { compose } from './symbol-compose';

export { re, parse, compose }
