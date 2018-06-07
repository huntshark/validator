
## isEmail(val, locale)

----------

#### 描述：

    校验 `val` 是否为邮箱

#### 参数：

    val，任意类型

#### 说明：

    若参数 `val` 是邮箱, 则返回 true, 否则返回 false

#### 示例：

```javascript
jxmValidator.isEmail('575099329@qq.com'); // => true
jxmValidator.isEmail('575099329qq.com'); // => false
jxmValidator.isEmail('575099329@qq'); // => false
jxmValidator.isEmail('dotx575099329@gmail.com'); // => true
jxmValidator.isEmail('dotx575099329@163.com'); // => true
jxmValidator.isEmail('dotx575099329@qingniu.co'); // => true
```
