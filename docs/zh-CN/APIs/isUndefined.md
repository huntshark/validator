
## isUndefined(val)

#### 描述：

    校验参数 `val` 是否为 `undefined`

#### 参数：

    val，任意类型

#### 说明：

    当且仅当参数 val === undefined 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isUndefined(undefined); // => true
jxmValidator.isUndefined(null); // => false
jxmValidator.isUndefined(0); // => false
jxmValidator.isUndefined(''); // => false
jxmValidator.isUndefined('undefined'); // => false
```
