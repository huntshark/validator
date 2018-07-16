
## isUnNegativeInteger(val, options)

#### 描述：

    校验参数 `val` 是否为非负整数

#### 参数：

    val，任意类型

    options，可选参数，默认值 {isStrict: false}

    options.isStrict, 严格模式(true)／非严格模式(false)

#### 说明：

    该接口存在两种模式, 即严格模式、非严格模式;

    默认采用 `非严格模式`

    若参数 `val` 为 number 类型, 并且是非负整数 则返回 true, 否则返回 false
    若参数 `val` 为 string 类型, 并且通过验证为非负整数字符串, 则返回 true, 否则返回 false
    若参数 `val` 不属于以上两种类型, 则直接返回 false

    若参数 `val` 的值为空字符串（''、'   '）, 则直接返回 false

    若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false

    e.g.

      待校验参数值: '3'
      > 若是严格模式，则该参数值校验后，返回 false
      > 若是非严格模式, 则该参数值校验后, 返回 true

#### 示例：

```javascript
jxmValidator.isUnNegativeInteger(3); // => true
jxmValidator.isUnNegativeInteger('3'); // => true
jxmValidator.isUnNegativeInteger(3, {isStrict: true}); // => true
jxmValidator.isUnNegativeInteger('3', {isStrict: true}); // => false

jxmValidator.isUnNegativeInteger(0); // => true
jxmValidator.isUnNegativeIntegerv('0'); // => true
jxmValidator.isUnNegativeInteger(0, {isStrict: true}); // => true
jxmValidator.isUnNegativeInteger('0', {isStrict: true}); // => false

jxmValidator.isUnNegativeInteger(-3); // => false
jxmValidator.isUnNegativeInteger('-3'); // => false
jxmValidator.isUnNegativeInteger(-3, {isStrict: true}); // => false
jxmValidator.isUnNegativeInteger('-3', {isStrict: true}); // => false

jxmValidator.isUnNegativeInteger(3.3); // => false
jxmValidator.isUnNegativeInteger('3.3'); // => false
jxmValidator.isUnNegativeInteger(3.3, {isStrict: true}); // => false
jxmValidator.isUnNegativeInteger('3.3', {isStrict: true}); // => false

jxmValidator.isUnNegativeInteger(-3.3); // => false
jxmValidator.isUnNegativeInteger('-3.3'); // => false
jxmValidator.isUnNegativeInteger(-3.3, {isStrict: true}); // => false
jxmValidator.isUnNegativeInteger('-3.3', {isStrict: true}); // => false

jxmValidator.isUnNegativeInteger(''); // => false
jxmValidator.isUnNegativeInteger('   '); // => false
jxmValidator.isUnNegativeInteger(null); // => false
jxmValidator.isUnNegativeInteger(undefined); // => false

jxmValidator.isUnNegativeInteger(NaN); // => false
jxmValidator.isUnNegativeInteger(Number.POSITIVE_INFINITY); // => false
jxmValidator.isUnNegativeInteger(Number.NEGATIVE_INFINITY); // => false
```
