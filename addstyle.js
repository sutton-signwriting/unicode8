
// appends CSS styling to documentation output for SignWriting in Unicode (SWU) character font-family.
// alternatively, modify node_modules/dcumentation/src/default-theme/assets/style.css to add styling directly

const fs = require('fs');

const appendStyle = `
@font-face {
  font-family: "NoToSansSignWriting";
  src: 
    local('NotoSansSignWriting'),
    local('Noto Sans SignWriting'),
    local('Noto_Sans_SignWriting'),
    local('Noto Sans SignWriting Regular'),
    local('Noto_Sans_SignWriting_Regular'),
    url('https://notofonts.github.io/sign-writing/fonts/NotoSansSignWriting/full/ttf/NotoSansSignWriting-Regular.ttf') format('opentype');
}

.pre,
pre,
code,
.code {
  font-family: Source Code Pro, Menlo, Consolas, Liberation Mono, monospace, NotoSansSignWriting;
}
`;

fs.appendFile('docs/assets/style.css', appendStyle, function (err) {
  if (err) console.log(err);
});
