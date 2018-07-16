
## isIpv4(val)

#### 描述：

    校验 `val` 是否为 ipv4

#### 参数：

    val，任意类型

#### 说明：

    若参数 `val` 是 ipv4, 则返回 true, 否则返回 false

#### 示例：

```javascript
jxmValidator.ipv4('192.168.1.1'); // => true
jxmValidator.ipv4('0.0.0.0'); // => true
jxmValidator.ipv4('0.0.0.1'); // => true
jxmValidator.ipv4('01.1.1.1'); // => true
jxmValidator.ipv4('255.255.255.255'); // => true

jxmValidator.ipv4('127.0.0.1'); // => true
jxmValidator.ipv4('127.0.0'); // => false
jxmValidator.ipv4('127.a.0.1'); // => false
jxmValidator.ipv4('127..0.1'); // => false

jxmValidator.ipv4('111.111.111.256'); // => false

jxmValidator.ipv4(192); // => false
```
