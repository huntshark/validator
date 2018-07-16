
## isInfinity(val)

#### 描述：

    校验参数 `val` 是否为 `Infinity` 或 `-Infinity`

#### 参数：

    val，任意类型

#### 说明：

    当且仅当参数 val 为 `Infinity` 或 `-Infinity` 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isInfinity(Number.POSITIVE_INFINITY); // => true
jxmValidator.isInfinity(Number.NEGATIVE_INFINITY); // => true

jxmValidator.isInfinity(NaN); // => false
jxmValidator.isInfinity(null); // => false
jxmValidator.isInfinity(undefined); // => false

jxmValidator.isInfinity(3); // => false
jxmValidator.isInfinity(''); // => false
```
