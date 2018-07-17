
validator
===========================

[![NPM version](http://img.shields.io/npm/v/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)
[![Build Status](https://travis-ci.org/sTdobTs/validator.svg?branch=master)](https://travis-ci.org/sTdobTs/validator)
[![Coverage Status](https://coveralls.io/repos/github/sTdobTs/validator/badge.svg?branch=master)](https://coveralls.io/github/sTdobTs/validator?branch=master)
[![License](https://img.shields.io/npm/l/jxm-validator.svg?maxAge=2592000)](https://github.com/sTdobTs/validator/blob/master/LICENSE)
![NPM bundle size (minified)](https://img.shields.io/bundlephobia/min/jxm-validator.svg)
![NPM bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/jxm-validator.svg)

> [中文](https://github.com/sTdobTs/validator/blob/master/README.zh-CN.md) | [English](https://github.com/sTdobTs/validator)

This is a modern JavaScript verification toolkit library, running on Node.js and in the modern browser, provide feature-rich verification function, making verification simple and fun.

## Installation

In a browser:

```html
  <script src="validator.min.js"></script>
```

Using npm:

```shell
  npm i --save jxm-validator
```

## Get Started

In Node.js:

```javascript
  // reference
  const jxmValidator = require('jxm-validator');

  // Check negative number
  jxmValidator.isNegativeNumber(-2); // => true
  jxmValidator.isNegativeNumber(-2.3); // => true
  jxmValidator.isNegativeNumber(2.3); // => false

  // Check postive integer
  jxmValidator.isPositiveInteger(2); // => true
  jxmValidator.isPositiveInteger(2.3); // => false
  jxmValidator.isPositiveInteger(-2); // => false
```

## Documentation

API Docs, please open [here](https://github.com/sTdobTs/validator/blob/master/docs/en-US/APIs.md).

## Community

If you have any question, please open an issue [here](https://github.com/sTdobTs/validator/issues).

## Changelog

If you see all changes, please open [here](https://github.com/sTdobTs/validator/wiki/Changelog)

## License

[MIT License](LICENSE)
