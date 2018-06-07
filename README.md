
validator
===========================
基于 ECMAScript5.1 实现的验证工具包，提供了丰富的校验和工具方法，在 Node.js 和现代浏览器中可以使用。

## 安装

在浏览器中使用

```html
  <script src="validator.min.js"></script>
```

使用 npm 安装

```shell
  npm i --save jxm-validator
```

在 Node.js 中使用

```javascript
  const jxmValidator = require('jxm-validator');

  jxmValidator.isNull(null);
```

## 目录

* [使用指南](#使用指南)
* [接口文档](#接口文档)
* [版本规划](#版本规划)
* [讨论交流](#讨论交流)
* [补充说明](#补充说明)
* [变更记录](#变更记录)

## 使用指南

暂无使用指南

## 接口文档

API文档，请看 [这里](https://github.com/sTdobTs/validator/blob/master/docs/APIs.md)

## 版本规划

v0.0.6

* 增加 account/password 校验
* 增加 date 校验
* 增加 language 校验
* 增加 letter&number 校验
* 增加 url 校验
* 增加 ip 校验
* 增加 IDCard 校验

## 讨论交流

如果您有任何疑问，可以在 [这里](https://github.com/sTdobTs/validator/issues) 提交 issue。

## 变更记录

v0.0.5

* 新增 `isJSON` 校验
* 新增 `isFunction` 校验
* 新增 `isEmptyString` 校验
* 更新单元测试
* 更新接口文档
* Fixed 已知的问题

v.0.0.4
* 新增`isNaN` 校验
* 新增`isInfinity` 校验

* 新增`isNumber` 校验
* 新增`isNumeric` 校验
* 新增`isRealNumber` 校验

* 新增`isInteger` 校验
* 新增`isPositiveInteger` 校验
* 新增`isNegativeInteger` 校验
* 新增`isUnPositiveInteger` 校验
* 新增`isUnNegativeInteger` 校验

* 新增`isPositiveNumber` 校验
* 新增`isNegativeNumber` 校验
* 新增`isUnPositiveNumber` 校验
* 新增`isUnNegativeNumber` 校验

* 新增`isZero` 校验
* 新增`isUnZero` 校验

* 新增`isString` 校验
* 新增`isUnEmptyString` 校验

* 新增`isArray` 校验
* 新增`isEmptyArray` 校验

* 新增`isObject` 校验
* 新增`isPlainObject` 校验

* 新增`isEmail` 校验
* 新增`isMobile` 校验
* 新增`isTelephone` 校验
* 新增`isPhone` 校验

## 许可协议

[MIT](LICENSE)
