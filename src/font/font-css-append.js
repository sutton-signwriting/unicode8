
/**
 * Function that appends font-face CSS for the Noto Sans SignWriting font for use with SignWriting in Unicode 8 (uni8) characters.
 * 
 * This font-face declaration will use a locally installed font if available.
 * If not found, the font will be loaded from a content delivery network.
 * 
 * The list of local names is currently a work in progress.
 * The font-face currently works for Windows and iOS.
 * This CSS is duplicated in the src/font/index.css file.
 * 
 * @function font.cssAppend
 * @param {string} dir - an optional relative directory for font location
 * @example
 * font.cssAppend('./font/')
 */
const cssAppend = function(dir='') {
  const id = "SgnwUnicode8FontCss";
  if (!document.getElementById(id)){
    const style = document.createElement('style');
    style.setAttribute("id","SgnwUnicode8FontCss")
    style.appendChild(document.createTextNode(`
    @font-face {
      font-family: "NotoSansSignWriting";
      src: 
        local('NotoSansSignWriting'),
        local('Noto Sans SignWriting'),
        local('Noto_Sans_SignWriting'),
        local('Noto Sans SignWriting Regular'),
        local('Noto_Sans_SignWriting_Regular'),
        ${dir?`url('${dir}NotoSansSignWriting-Regular.otf') format('truetype'),`:""}
        url('https://cdn.jsdelivr.net/gh/googlefonts/noto-fonts/unhinted/otf/NotoSansSignWriting/NotoSansSignWriting-Regular.otf') format('opentype');
    }
    `));
    document.head.appendChild(style);
  }
}

export { cssAppend }
