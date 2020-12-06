
/**
 * Object of regular expressions for style strings
 * 
 *   { colorize, colorhex, colorname, padding, zoom, zoomsym, classbase, id, colorbase, color, colors, background, detail, detailsym, classes, full }
 * @alias string.re
 * @type {object}
 */
let re = {
  'base': '(?:\uD836[\uDC00-\uDE8B])',
  'fill': '(?:\uD836[\uDE9B-\uDE9F])',
  'rotation': '(?:\uD836[\uDEA1-\uDEAF])'
}

re.derivative = `(?:${re.symbol}|${re.coord})`;

export { re }
