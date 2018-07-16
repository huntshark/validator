
## isBoolean(val)

#### 描述：

    校验参数 `val` 是否为 `boolean`

#### 参数：

    val，任意类型

#### 说明：

    当参数 val 为 `boolean` 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
// boolean
jxmValidator.isBoolean(true); // => true
jxmValidator.isBoolean(false); // => true

jxmValidator.isBoolean(0); // => false
jxmValidator.isBoolean(''); // => false
jxmValidator.isBoolean(null); // => false
jxmValidator.isBoolean(undefined); // => false

// boolean 包装对象
jxmValidator.isBoolean(Boolean(true)); // => true
jxmValidator.isBoolean(new Boolean(true)); // => true
jxmValidator.isBoolean({}); // => false
```
