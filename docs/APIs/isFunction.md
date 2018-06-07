
## isFunction(val)

#### 描述：

    校验参数 `val` 是否为 `function`

#### 参数：

    val，任意类型

#### 说明：

    仅当参数 val 为 `function` 时，返回 `true`, 否则返回 `false`

#### 示例：

```javascript
jxmValidator.isFunction(parseInt); // => true
jxmValidator.isFunction([]); // => false
jxmValidator.isFunction({}); // => false
jxmValidator.isFunction(new Date()); // => false

jxmValidator.isFunction(null); // => false
```
