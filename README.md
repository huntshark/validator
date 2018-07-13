
validator
===========================

[![NPM version](http://img.shields.io/npm/v/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)
[![Build Status](https://travis-ci.org/sTdobTs/validator.svg?branch=master)](https://travis-ci.org/sTdobTs/validator)
[![Downloads](http://img.shields.io/npm/dm/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)

This is a modern JavaScript verification toolkit library, running on Node.js and in the modern browser, provide feature-rich verification function, making verification simple and fun.

## Installation

Using in browser

```html
  <script src="validator.min.js"></script>
```

Using npm

```shell
  npm i --save jxm-validator
```

## Get Started

```javascript
  // reference
  const jxmValidator = require('jxm-validator');

  // Check negative number
  jxmValidator.isNegativeNumber(-2); // => true
  jxmValidator.isNegativeNumber(-2.3); // => true
  jxmValidator.isNegativeNumber(2.3); // => false
```

## Documentation

API Docs, please see [here](https://github.com/sTdobTs/validator/blob/master/docs/APIs.md)

## Feature

v0.0.6

* Added check `account/password` 校验
* Added `date` 校验
* Added `language` 校验
* Added `letter & number` 校验
* Added `url` 校验
* Added `ip` 校验
* Added `IDCard` 校验

## Community

If you have any question, please open an issue [here](https://github.com/sTdobTs/validator/issues)

## Changelog



## License

[MIT](LICENSE)
