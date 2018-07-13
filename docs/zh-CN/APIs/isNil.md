
## isNil(val)

#### 描述：

    校验参数 `val` 是否为 `nil`

#### 参数：

    val，任意类型

#### 说明：

    当参数 val === null 或者 val === undefined 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isNil(null); // => true
jxmValidator.isNil(undefined); // => true

jxmValidator.isNil(0); // => false
jxmValidator.isNil(''); // => false
jxmValidator.isNil('null'); // => false
jxmValidator.isNil('undefined'); // => false
```
