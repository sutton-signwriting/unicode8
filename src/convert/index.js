
/** The convert module contains functions to help process the various SignWriting Character sets 
 * [SignWriting in Unicode 8 (uni8)](https://en.wikipedia.org/wiki/SignWriting#Unicode)
 * [FSW and SWU](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-07.html#rfc.section.2.2)
 * @module convert
 */

const uni2txt = (uni8) => String.fromCharCode(0xD800 + ((uni8 - 0x10000) >> 10), 0xDC00 + ((uni8 - 0x10000) & 0x3FF))
const uni2hex = (uni8) => uni8.toString(16).toUpperCase();
const uni2fsw = (uni8) => 1 + ((parseInt(key.slice(1, 4), 16) - 256) * 96) + ((parseInt(key.slice(4, 5), 16)) * 16) + parseInt(key.slice(5, 6), 16);
const uni2swu = (uni8) => 1 + ((parseInt(key.slice(1, 4), 16) - 256) * 96) + ((parseInt(key.slice(4, 5), 16)) * 16) + parseInt(key.slice(5, 6), 16);

 /**
 * Function to convert an Formal SignWriting in ASCII (FSW) to SignWriting in Unicode 8 (uni8)
 * @function convert.fsw2uni
 * @param {string} fswSym - an FSW symbol key
 * @returns {string} SignWriting in Unicode 8 character(s)
 * @example
 * convert.fsw2uni('𝠀')
 * 
 * return ''
 */
const fsw2uni = (fswSym) => {
  let base = parseInt(key.slice(1, 4), 16);
  let fill = parseInt(key.slice(4, 5), 16);
  let rotation = parseInt(key.slice(5, 6), 16);
  return uni2txt(base + parseInt('1D700',16)) + fill?uni2txt(fill + parseInt('1DA9A',16)):'' + rotation?uni2txt(rotation + parseInt('1DAA0',16)):''; 
}


const swu2uni = (swuSym) => 1 + ((parseInt(key.slice(1, 4), 16) - 256) * 96) + ((parseInt(key.slice(4, 5), 16)) * 16) + parseInt(key.slice(5, 6), 16);

export { uni2txt, uni2hex, uni2fsw, uni2swu, fsw2uni, swu2uni }
