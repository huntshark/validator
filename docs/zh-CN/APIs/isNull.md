
## isNull(val)

#### 描述：

    校验参数 `val` 是否为 `null`

#### 参数：

    val，任意类型

#### 说明：

    当且仅当参数 val === null 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isNull(null); // => true
jxmValidator.isNull(undefined); // => false

jxmValidator.isNull(0); // => false
jxmValidator.isNull(''); // => false
jxmValidator.isNull('null'); // => false
```
