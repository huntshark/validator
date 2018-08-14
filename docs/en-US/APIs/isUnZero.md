
## isUnZero(val, options)

#### 描述：

    校验参数 `val` 是否为数字, 并且不等于零

#### 参数：

    val，任意类型

    options，可选参数，默认值 {isStrict: false}

    options.isStrict, 严格模式(true)／非严格模式(false)

#### 说明：

    该接口存在两种模式, 即严格模式、非严格模式;

    默认采用 `非严格模式`

    若参数 `val` 为 number 类型, 并且不是 NaN, Infinity, -Infinity, 同时也不等于零, 则返回 true, 否则返回 false
    若参数 `val` 为 string 类型, 并且经过 ToNumber 转换为非 NaN, Infinity, -Infinity 的数字, 同时也不等于零, 则返回 true, 否则返回 false
    若参数 `val` 不属于以上两种类型, 则直接返回 false

    若参数 `val` 的值为空字符串（''、'   '）, 则直接返回 false

    若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false

    e.g.

      待校验参数值: '3'
      > 若是严格模式，则该参数值校验后，返回 false
      > 若是非严格模式, 则该参数值校验后, 返回 true

#### 示例：

```javascript
jxmValidator.isUnZero(3); // => true
jxmValidator.isUnZero(-3); // => true
jxmValidator.isUnZero('3'); // => true
jxmValidator.isUnZero('3', {isStrict: true}); // => false

jxmValidator.isUnZero(0); // => false
jxmValidator.isUnZero('0'); // => false
jxmValidator.isUnZero('0', {isStrict: true}); // => false

jxmValidator.isUnZero(NaN); // => false
jxmValidator.isUnZero(Number.POSITIVE_INFINITY); // => false
jxmValidator.isUnZero(Number.NEGATIVE_INFINITY); // => false

jxmValidator.isUnZero(''); // => false
jxmValidator.isUnZero('   '); // => false
jxmValidator.isUnZero(null); // => false
jxmValidator.isUnZero(undefined); // => false

jxmValidator.isUnZero(Object(3)); // => true
jxmValidator.isUnZero(Object('3')); // => true
jxmValidator.isUnZero(Object(3, {isStrict: true})); // => true
jxmValidator.isUnZero(Object('3', {isStrict: true})); // => false
```
