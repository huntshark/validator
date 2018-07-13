
## isEmptyArray(val)

#### 描述：

    校验参数 `val` 是否为空数组

#### 参数：

    val，任意类型

#### 说明：

    若参数 `val` 不是 array, 则直接返回 false
    若参数 `val` 是 array 并且为空, 则返回 true, 否则返回 false

#### 示例：

```javascript
jxmValidator.isEmptyArray([]); // => true
jxmValidator.isEmptyArray({}); // => false
jxmValidator.isEmptyArray([1]); // => false

jxmValidator.isEmptyArray(Object({})); // => false
jxmValidator.isEmptyArray(Object([])); // => true
jxmValidator.isEmptyArray(Object([1])); // => false

jxmValidator.isEmptyArray(new Object([])); // => true
jxmValidator.isEmptyArray(new Object([1])); // => false
```
