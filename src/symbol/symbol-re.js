
/**
 * Object of regular expressions for symbol strings
 * 
 *   { base, fill, rotation, full }
 * @alias symbol.re
 * @type {object}
 */
let re = {
  'base': '(?:\uD836[\uDC00-\uDE8B])',
  'fill': '(?:\uD836[\uDE9B-\uDE9F])',
  'rotation': '(?:\uD836[\uDEA1-\uDEAF])'
}

re.full = `(${re.base})(${re.fill})?(${re.rotation})?`;

export { re }
