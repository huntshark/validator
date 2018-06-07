
## isNumber(val)

----------

#### 描述：

    校验参数 `val` 是否为 `number`

#### 参数：

    val，任意类型

#### 说明：

    仅当参数 val 为 `number` 时，返回 `true`, 否则返回 `false`

    * number 类型还包括: NaN, Infinity, -Infinity

#### 示例：

```javascript
// number
jxmValidator.isNumber(3); // => true
jxmValidator.isNumber('3'); // => false

jxmValidator.isNumber(NaN); // => true
jxmValidator.isNumber(Number.POSITIVE_INFINITY); // => true
jxmValidator.isNumber(Number.NEGATIVE_INFINITY); // => true

jxmValidator.isNumber(''); // => false
jxmValidator.isNumber(true); // => false
jxmValidator.isNumber(null); // => false
jxmValidator.isNumber(undefined); // => false

// number 包装对象
jxmValidator.isNumber(Number(3)); // => true
jxmValidator.isNumber(new Number(3)); // => true

jxmValidator.isNumber({}); // => false
jxmValidator.isNumber(Object(3)); // => true
jxmValidator.isNumber(Object('3')); // => false
```
