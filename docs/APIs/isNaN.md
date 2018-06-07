
## isNaN(val)

#### 描述：

    校验参数 `val` 是否为 `NaN`

#### 参数：

    val，任意类型

#### 说明：

    仅当参数 val 为 `NaN` 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isNaN(NaN); // => true
jxmValidator.isNaN(null); // => false
jxmValidator.isNaN(undefined); // => false

jxmValidator.isNaN(''); // => false
jxmValidator.isNaN('3'); // => false

jxmValidator.isNaN({}); // => false
jxmValidator.isNaN(Number('foo')); // => true
jxmValidator.isNaN(Number('3')); // => false
```
