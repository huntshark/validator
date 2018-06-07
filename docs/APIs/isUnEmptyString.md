
### isUnEmptyString(val, options)

----------

描述：

    校验参数 `val` 是否为非空字符串

参数：

    val，任意类型

    options，可选参数，默认值 {isStrict: true}

    options.isStrict, 严格模式(true)／非严格模式(false)

说明：

    该接口存在两种模式, 即严格模式、非严格模式，默认采用严格模式

    若参数 `val` 不是 string, 则直接返回 false
    若参数 `val` 是 string 并且不为空(''), 则返回 true, 否则返回 false

    若是参数 options 指定了严格模式，即 options.isStrict = true, 
    则会对参数 `val` 进行两端去除空白（空字符）, 之后在校验其是否为非空字符串

    e.g.

      待校验参数值: '   '
      > 若是严格模式，则该参数值校验后，返回 false,
      > 若是非严格模式, 则该参数值校验后, 返回 true

示例：

```javascript
jxmValidator.isUnEmptyString('3'); // => true

jxmValidator.isUnEmptyString(''); // => false
jxmValidator.isUnEmptyString('', {isStrict: false})); // => false

jxmValidator.isUnEmptyString('  '); // => false
jxmValidator.isUnEmptyString('  ', {isStrict: false}); // => true
```
