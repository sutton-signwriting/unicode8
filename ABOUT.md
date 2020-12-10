# The SignWriting Script (Sgnw)
SignWriting is an international standard for writing sign languages by hand or with computers.
From education to research, from entertainment to religion, SignWriting has proven useful because people are using it to write signed languages

Initially developed in 1974, the script was written exclusively by hand for 12 years.
Since then the script has spread around the world and continues to be written on paper and chalkboard.

In 1981, SignWriting Publishing rapidly evolved with Block Printing.
In 1986, computerization of the SignWriting Block Printing began.
The current symbol encoding of the International SignWriting Alphabet 2010 (ISWA 2010) has been stable since the font release on October 20th, 2010.

The larger script encoding model has been stable since the initial release of [Modern SignWriting](https://github.com/slevinski/msw) on January 12th, 2012.

The 2 major families of the SignWriting Script are Handwriting for the writer and Block Printing for the reader.
Block Printing uses more features and Handwriting often uses less.
Block printing is used in education, publishing, and is the basis of the computerized model.

## Unicode Standard
The [official Unicode](https://en.wikipedia.org/wiki/SignWriting#Unicode) specification for SignWriting is an off-shoot of our community efforts.
A [number of proposals](https://scriptsource.org/cms/scripts/page.php?item_id=entry_detail&uid=jt4fblkvhu) have been submitted to the Unicode Technical Committee (UTC).
As of 2020, the character set can not write complete words for SignWriting signs because it lacks characters for layout.
The facial diacritic section is not fully implemented, tested, nor is it compatible with the community data and fonts.

### Character Set
The official Unicode character set for SignWriting only supports individual symbols and does not include characters for two-dimensional layout.
Outside of facial diacritics, issues of layout require a higher level protocol such as SVG, CSS, or the HTML 5 canvas.

* [SignWriting in Unicode 8 (uni8)](http://std.dkuug.dk/jtc1/sc2/wg2/docs/n4342.pdf) - Individual symbols are written with one to three characters of the official Sutton SignWriting Unicode Block (U+1D800 - U+1DAAF).  These characters have issues with sorting and searching. These characters may misbehave in older software or simple applications.


### OpenType Font
In 2020, Google released a font for the SignWriting in Unicode 8 (uni8) character set.
This is the first font to support the facial diacritic design of the SignWriting in Unicode 8 (uni8) specification.

* [Noto Sans SignWriting](https://scriptsource.org/cms/scripts/page.php?item_id=entry_detail&uid=wb9v9lchat) - a font for Sutton SignWriting that fully implements the official Unicode 8 design with modifying characters and facial diacritics. The font can be used to view most symbols of the International SignWriting Alphabet 2010 (ISWA 2010) as well as create complex facial expressions with diacritics.
