
## isArray(val)

----------

#### 描述：

    校验参数 `val` 是否为 `array`

#### 参数：

    val，任意类型

#### 说明：

    仅当参数 val 为 `array` 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isArray([]); // => true
jxmValidator.isArray({}); // => false
jxmValidator.isArray(parseInt); // => false
jxmValidator.isArray(new Date()); // => false

jxmValidator.isArray(null); // => false
jxmValidator.isArray(Object({})); // => false
jxmValidator.isArray(Object([])); // => true
jxmValidator.isArray(new Object([])); // => true
```
