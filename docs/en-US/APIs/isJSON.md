
## isJSON(val)

#### 描述：

    校验 `val` 是否为 JSON 对象

#### 参数：

    val，任意类型

#### 说明：

    若参数 `val` 是 JSON 对象, 则返回 true, 否则返回 false

#### 示例：

```javascript
jxmValidator.isJSON('{"a": 3}'); // => true
jxmValidator.isJSON('{a: 3}'); // => false
jxmValidator.isJSON('[3, 4]'); // => false
jxmValidator.isJSON('3'); // => false

jxmValidator.isJSON(null); // => false

jxmValidator.isJSON({}); // => false
```
