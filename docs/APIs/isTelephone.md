
## isTelephone(val, locale)

#### 描述：

    校验 `val` 是否为座机号码

#### 参数：

    val，任意类型

    locale，可选参数，默认值 'ZHCN'

#### 说明：

    若参数 `val` 符合参数 `locale`(默认值:  LOCALE_ENUM.ZHCN) 指定地区的座机号码格式, 则返回 true, 否则返回 false

    若参数 `locale` 指定地区不存在, 同样直接返回 false

    对于不同地区使用其所在地区的座机号码校验格式

    目前, 仅会对座机号码进行号码段和位数进行校验，不做真实性校验

#### 示例：

```javascript
jxmValidator.isTelephone('7632614'); // => true
jxmValidator.isTelephone('0550-7632614'); // => true
jxmValidator.isTelephone('185055059334'); // => false
```
