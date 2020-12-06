# @sutton-signwriting/uni8

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sutton-signwriting/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![version](https://img.shields.io/npm/v/@sutton-signwriting/uni8)](https://www.npmjs.com/package/@sutton-signwriting/uni8)
[![npm downloads](https://img.shields.io/npm/dm/@sutton-signwriting/uni8)](https://npm-stat.com/charts.html?package=@sutton-signwriting/uni8&from=2020-12-06)

<img alt="Core Package Mindmap" src="./Uni8.jpg" width="100%">

@sutton-signwriting/uni8 is a javascript package for SignWriting that processes Unicode 8 characters.

This package also supports Formal SignWriting in ASCII (FSW) and SignWriting in Unicode (SWU) character sets.  See [draft-slevinski-formal-signwriting](https://tools.ietf.org/id/draft-slevinski-formal-signwriting-07.html) for detailed specification.

> Author: https://SteveSlevinski.me  
> Channel: https://www.youtube.com/channel/UCXu4AXlG0rXFtk_5SzumDow  
> Support: https://www.patreon.com/signwriting  

## Useful links

- Source: https://github.com/sutton-signwriting/uni8
- Distribution: https://unpkg.com/browse/@sutton-signwriting/uni8/
- Documentation: https://sutton-signwriting.github.io/uni8/
- Issue Tracker: https://github.com/sutton-signwriting/uni8/issues
- Online Discussion: https://gitter.im/sutton-signwriting/community
- Online Training: https://katacoda.com/sutton-signwriting/courses/uni8

## Types of files
The source is written in small ES Modules available in the `src` directory along with the associated tests.

The distribution is available in three flavors.  xx KB for the whole library minified.  Individual modules as small as x KB.
* .js - Universal Module Definition
* .cjs - CommonJS
* .mjs - ES Module 

## Installation

### Download and Install with NPM

    npm install @sutton-signwriting/uni8

## Developer Installation

### Download from GitHub and Install Development Dependencies

    wget https://github.com/sutton-signwriting/uni8/archive/master.zip
    unzip master.zip
    cd uni8-master
    npm install

## Usage

### Using in Node

    // import entire library
    const uni8 = require('@sutton-signwriting/uni8');

    // import individual module
    const uni8Symbol = require('@sutton-signwriting/uni8/symbol');

### Using in the Browser

#### Local files
    // import entire library
    // available as ssw.uni8
    <script src="uni8.js"></script>

    // import individual module
    // available as ssw.uni8.symbol
    <script src="symbol/symbol.js"></script>

#### Unpkg
    // import entire library
    // available as ssw.uni8
    <script src="https://unpkg.com/@sutton-signwriting/uni8@1.0.0"></script>

    // import individual module
    // available as ssw.uni8.symbol
    <script src="https://unpkg.com/@sutton-signwriting/uni8@1.0.0/symbol/symbol.js"></script>

## License
MIT

## SignWriting General Interest
- SignWriting Website: https://signwriting.org/
- Wikipedia page: https://en.wikipedia.org/wiki/SignWriting
- Email Discussion: https://www.signwriting.org/forums/swlist/
- Facebook Group: https://www.facebook.com/groups/SuttonSignWriting/
