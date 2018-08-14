
validator
===========================

[![NPM version](http://img.shields.io/npm/v/jxm-validator.svg)](https://npmjs.org/package/jxm-validator)
[![Build Status](https://travis-ci.org/sTdobTs/validator.svg?branch=master)](https://travis-ci.org/sTdobTs/validator)
[![Coverage Status](https://coveralls.io/repos/github/sTdobTs/validator/badge.svg?branch=master)](https://coveralls.io/github/sTdobTs/validator?branch=master)
[![License](https://img.shields.io/npm/l/jxm-validator.svg?maxAge=2592000)](https://github.com/sTdobTs/validator/blob/master/LICENSE)
![NPM bundle size (minified)](https://img.shields.io/bundlephobia/min/jxm-validator.svg)
![NPM bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/jxm-validator.svg)

> [中文](https://github.com/sTdobTs/validator/blob/master/README.zh-CN.md) | [English](https://github.com/sTdobTs/validator)

基于 ECMAScript 5.1 实现的验证工具包，提供了丰富的校验方法，在 Node.js 和现代浏览器中都可以使用。

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
  // 引用
  const jxmValidator = require('jxm-validator');

  // 检验 负数
  jxmValidator.isNegativeNumber(-2); // => true
  jxmValidator.isNegativeNumber(-2.3); // => true
  jxmValidator.isNegativeNumber(2.3); // => false

  // 校验 正整数
  jxmValidator.isPositiveInteger(2); // => true
  jxmValidator.isPositiveInteger(2.3); // => false
  jxmValidator.isPositiveInteger(-2); // => false
```

## 接口文档

API 文档，请看 [这里](https://github.com/sTdobTs/validator/blob/master/docs/zh-CN/APIs.md)

## 讨论交流

如果您有任何疑问，可以在 [这里](https://github.com/sTdobTs/validator/issues) 提交 issue

## 变更记录

如果您需要查看所有的变更记录, 请看 [这里](https://github.com/sTdobTs/validator/wiki/Changelog)

## 许可协议

[MIT License](LICENSE)
