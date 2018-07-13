
validator
===========================

[![NPM version](http://img.shields.io/npm/v/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)
[![Build Status](https://travis-ci.org/sTdobTs/validator.svg?branch=master)](https://travis-ci.org/sTdobTs/validator)
[![Downloads](http://img.shields.io/npm/dm/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)

基于 ECMAScript5.1 实现的验证工具包，提供了丰富的校验和工具方法，在 Node.js 和现代浏览器中可以使用。

## 安装

在浏览器中使用:

```html
  <script src="validator.min.js"></script>
```

使用 npm 安装:

```shell
  npm i --save jxm-validator
```

## 开始

在 Node.js 中使用:

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

## 接口文档

API 文档，请看 [这里](https://github.com/sTdobTs/validator/blob/master/docs/zh-CN/APIs.md)

## 讨论交流

如果您有任何疑问，可以在 [这里](https://github.com/sTdobTs/validator/issues) 提交 issue。

## 变更记录

如果您想要查看所有的变更记录, 请看 [here](https://github.com/sTdobTs/validator/wiki/Changelog)

## 许可协议

[MIT](LICENSE)
