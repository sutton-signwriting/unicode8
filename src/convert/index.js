
/** The convert module contains functions to help process the various SignWriting Character sets. 
 * @module convert
 */

import { parse as parseSymbol } from '../symbol/symbol-parse'; 

 /**
 * Function to convert a SignWriting in Unicode 8 (uni8) code point to a character
 * @function convert.code2uni
 * @param {integer} code - unicode code point
 * @returns {string} SignWriting in Unicode 8 character
 * @example
 * convert.code2uni(0x1D800)
 * 
 * return '𝠀'
 */
const code2uni = (code) => String.fromCharCode(0xD800 + ((code - 0x10000) >> 10), 0xDC00 + ((code - 0x10000) & 0x3FF));

 /**
 * Function to convert a SignWriting in Unicode 8 (uni8) character to a code point
 * @function convert.uni2code
 * @param {string} uni8 - SignWriting in Unicode 8 character
 * @returns {integer} unicode code point
 * @example
 * convert.uni2code('𝠀')
 * 
 * return 0x1D800
 */
const uni2code = (uni8) => uni8.codePointAt(0);

 /**
 * Function to convert a SignWriting in Unicode 8 (uni8) character to hex values
 * @function convert.uni2hex
 * @param {string} uni8 - SignWriting in Unicode 8 character
 * @returns {string} hex value of unicode character
 * @example
 * convert.uni2hex('𝠀')
 * 
 * return "1D800"
 */
const uni2hex = (uni8) => uni8.codePointAt(0).toString(16).toUpperCase();

 /**
 * Function to convert a SignWriting in Unicode 8 (uni8) symbol to Formal SignWriting in ASCII (FSW)
 * @function convert.uni2fsw
 * @param {string} uni8 - SignWriting in Unicode 8 character(s)
 * @returns {string} an FSW symbol key
 * @example
 * convert.uni2fsw('𝠀')
 * 
 * return 'S10000'
 */
const uni2fsw = (uni8) => {
  let sym = parseSymbol(uni8);
  if (sym.base){
    sym.base = sym.base.codePointAt(0) - 0x1D700;
    sym.fill = sym.fill?(sym.fill.codePointAt(0) - 0x1DA9A):0;
    sym.rotation = sym.rotation?(sym.rotation.codePointAt(0) - 0x1DAA0):0;
    return "S" + sym.base.toString(16) + sym.fill.toString(16) + sym.rotation.toString(16)
  } else {
    return undefined;
  }
}

 /**
 * Function to convert a SignWriting in Unicode 8 (uni8) symbol to SignWriting in Unicode (SWU)
 * @function convert.uni2swu
 * @param {string} uni8 - SignWriting in Unicode 8 character(s)
 * @returns {string} an SWU symbol
 * @example
 * convert.uni2swu('𝠀')
 * 
 * return '񀀁'
 */
const uni2swu = (uni8) => {
  let sym = parseSymbol(uni8);
  if (sym.base){
    sym.base = sym.base.codePointAt(0) - 0x1D800;
    sym.fill = sym.fill?(sym.fill.codePointAt(0) - 0x1DA9A):0;
    sym.rotation = sym.rotation?(sym.rotation.codePointAt(0) - 0x1DAA0):0;
    return code2uni(0x40001 + (sym.base*96) + (sym.fill * 16) + sym.rotation);
  } else {
    return undefined;
  }
}

 /**
 * Function to convert a Formal SignWriting in ASCII (FSW) to SignWriting in Unicode 8 (uni8)
 * @function convert.fsw2uni
 * @param {string} fswSym - an FSW symbol key
 * @returns {string} SignWriting in Unicode 8 character(s)
 * @example
 * convert.fsw2uni('S10000')
 * 
 * return '𝠀'
 */
const fsw2uni = (fswSym) => {
  let base = parseInt(fswSym.slice(1, 4), 16);
  let fill = parseInt(fswSym.slice(4, 5), 16);
  let rotation = parseInt(fswSym.slice(5, 6), 16);
  return code2uni(base + 0x1D700) + (fill?code2uni(fill + 0x1DA9A):'') + (rotation?code2uni(rotation + 0x1DAA0):''); 
}

 /**
 * Function to convert a SignWriting in Unicode (SWU) to SignWriting in Unicode 8 (uni8)
 * @function convert.swu2uni
 * @param {string} swuSym - an SWU symbol
 * @returns {string} SignWriting in Unicode 8 character(s)
 * @example
 * convert.swu2uni('񀀁')
 * 
 * return '𝠀'
 */
const swu2uni = (swuSym) => {
  const symcode = swuSym.codePointAt(0) - 0x40001;
  const base = parseInt(symcode / 96);
  const fill = parseInt((symcode - (base * 96)) / 16);
  const rotation = parseInt(symcode - (base * 96) - (fill * 16));
  return code2uni(base + 0x1D800) + (fill?code2uni(fill + 0x1DA9A):'') + (rotation?code2uni(rotation + 0x1DAA0):'')
}

export { code2uni, uni2code, uni2hex, uni2fsw, uni2swu, fsw2uni, swu2uni }
