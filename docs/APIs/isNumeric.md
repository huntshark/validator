
## isNumeric(val, options)

----------

#### 描述：

    校验参数 `val` 是否为数字

#### 参数：

    val，任意类型

    options，可选参数，默认值 {isStrict: false}

    options.isStrict, 严格模式(true)／非严格模式(false)

#### 说明：

    该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`

    若参数 `val` 为 number 类型, 并且不是 NaN, Infinity, -Infinity, 则返回 true, 否则返回 false
    若参数 `val` 为 string 类型, 并且可以经过 ToNumber 转换为非 NaN, Infinity, -Infinity 的数字, 则返回 true, 否则返回 false
    若参数 `val` 不属于以上两种类型, 则直接返回 false

    若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false

    e.g.

      待校验参数值: '3'
      > 若是严格模式，则该参数值校验后，返回 false
      > 若是非严格模式, 则该参数值校验后, 返回 true

#### 示例：

```javascript
jxmValidator.isNumeric(3); // => true
jxmValidator.isNumeric('3'); // => true
jxmValidator.isNumeric('3', {isStrict: true}); // => false
jxmValidator.isNumeric('3a'); // => false

jxmValidator.isNumeric(NaN); // => false
jxmValidator.isNumeric(Number.POSITIVE_INFINITY); // => false
jxmValidator.isNumeric(Number.NEGATIVE_INFINITY); // => false

jxmValidator.isNumeric(''); // => false
jxmValidator.isNumeric(null); // => false
jxmValidator.isNumeric(undefined); // => false

jxmValidator.isNumeric(Number(3)); // => true
jxmValidator.isNumeric(new Number(3)); // => true
jxmValidator.isNumeric({}); // => false

jxmValidator.isNumeric(Object(3)); // => true
jxmValidator.isNumeric(Object('3')); // => true
jxmValidator.isNumeric(Object('3', {isStrict: true})); // => false
```
