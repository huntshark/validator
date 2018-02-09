
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

暂无接口文档

## 版本规划

v0.0.3
* 添加isNil
* 添加Boolean相关验证

## 讨论交流

如果您有任何疑问，可以在 [这里](https://github.com/sTdobTs/validator/issues) 提交 issue。

## 补充说明

暂无补充说明

## 变更记录

v0.0.2
* 新增 `isNull` 校验
* 新增 `isUndefined` 校验
* 新增 `js datatype 数据类型枚举`
* 新增 `locale 国际化枚举`
* 新增 `用于对参数进行类型校验`
* 采用 `webpack v3.0` 进行打包压缩
* 采用 `mocha, chai` 进行单元测试

## 许可协议

[MIT](LICENSE)
