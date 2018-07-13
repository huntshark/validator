
## isPlainObject(val)

#### 描述：

    校验 `val` 是否为纯粹的 object

#### 参数：

    val，任意类型

#### 说明：

    若参数 `val` 是纯粹的对象, 则返回 true, 否则返回 false

#### 示例：

```javascript
jxmValidator.isPlainObject({}); // => true
jxmValidator.isPlainObject([]); // => false
jxmValidator.isPlainObject(parseInt); // => false
jxmValidator.isPlainObject(new Date()); // => false

jxmValidator.isPlainObject(Object({})); // => true
jxmValidator.isPlainObject(Object('3'); // => false
jxmValidator.isPlainObject(new Object('3'); // => false

jxmValidator.isPlainObject(null); // => false
jxmValidator.isPlainObject(Object.create(null)); // => true
```
