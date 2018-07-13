
validator
===========================

[![NPM version](http://img.shields.io/npm/v/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)
[![Build Status](https://travis-ci.org/sTdobTs/validator.svg?branch=master)](https://travis-ci.org/sTdobTs/validator)
[![Downloads](http://img.shields.io/npm/dm/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)

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

```javascript
  // reference
  const jxmValidator = require('jxm-validator');

  // Check negative number
  jxmValidator.isNegativeNumber(-2); // => true
  jxmValidator.isNegativeNumber(-2.3); // => true
  jxmValidator.isNegativeNumber(2.3); // => false
```

## Documentation

API Docs, please see [here](https://github.com/sTdobTs/validator/blob/master/docs/APIs.md).

## Features

v0.0.6

* Added support to check `account/password`
* Added support to check `date`
* Added support to check `language`
* Added support to check `letter & number`
* Added support to check `url`
* Added support to check `ip`
* Added support to check `IDCard`

## Community

If you have any question, please open an issue [here](https://github.com/sTdobTs/validator/issues).

## Changelog



## License

[MIT](LICENSE)
