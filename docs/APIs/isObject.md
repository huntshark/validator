
### isObject(val)

----------

描述：

    校验参数 `val` 是否为 `object`

参数：

    val，任意类型

说明：

    仅当参数 val 为 `object` 时，返回 `true`, 否则返回 `false`

示例：

```javascript
jxmValidator.isObject({}); // => true
jxmValidator.isObject([]); // => false
jxmValidator.isObject(parseInt); // => false
jxmValidator.isObject(new Date()); // => false

jxmValidator.isObject(Object({})); // => true
jxmValidator.isObject(Object('3'); // => false
jxmValidator.isObject(new Object('3')); // => false

jxmValidator.isObject(null); // => false
jxmValidator.isObject(Object.create(null)); // => true

jxmValidator.isObject(new Class()); // => true
```
