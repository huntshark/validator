
## isRealNumber(val, options)

#### 描述：

    校验参数 `val` 是否为实数

#### 参数：

    val，任意类型

    options，可选参数，默认值 {isStrict: false}

    options.isStrict, 严格模式(true)／非严格模式(false)

#### 说明：

    该接口存在两种模式, 即严格模式、非严格模式;

    默认采用 `非严格模式`

    若参数 `val` 为 number 类型, 并且不是 NaN, 则返回 true, 否则返回 false
    若参数 `val` 为 string 类型, 并且可以经过 ToNumber 转换为非 NaN 的数字, 则返回 true, 否则返回 false
    若参数 `val` 不属于以上两种类型, 则直接返回 false

    若参数 `val` 的值为空字符串（''、'   '）, 则直接返回 false

    若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false

    e.g.

      待校验参数值: '3'
      > 若是严格模式，则该参数值校验后，返回 false
      > 若是非严格模式, 则该参数值校验后, 返回 true

#### 示例：

```javascript
jxmValidator.isRealNumber(3); // => true
jxmValidator.isRealNumber('3'); // => true
jxmValidator.isRealNumber(3, {isStrict: true}); // => true
jxmValidator.isRealNumber('3', {isStrict: true}); // => false
jxmValidator.isRealNumber('3a'); // => false

jxmValidator.isRealNumber(NaN); // => false
jxmValidator.isRealNumber(Number.POSITIVE_INFINITY); // => true
jxmValidator.isRealNumber(Number.NEGATIVE_INFINITY); // => true

jxmValidator.isRealNumber(''); // => false
jxmValidator.isRealNumber('   '); // => false
jxmValidator.isRealNumber(null); // => false
jxmValidator.isRealNumber(undefined); // => false

jxmValidator.isRealNumber(Number(3)); // => true
jxmValidator.isRealNumber(new Number(3)); // => true

jxmValidator.isRealNumber({}); // => false
jxmValidator.isRealNumber(Object(3)); // => true
jxmValidator.isRealNumber(Object('3')); // => true
jxmValidator.isRealNumber(Object('3', {isStrict: true})); // => false
```
