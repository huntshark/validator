
/**
 * 校验`val`是否为 NaN
 *
 * 若`val`是NaN，则返回true，否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNaN(val) {
  // @TODO
  //
  // 引用: ECMAScript5.1 15章节 [15.1.2.4](https://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4)
  // 全局对象函数 isNaN 存在如下怪异行为: 它总是先将参数转化成数字，然后再来判断是否是 NaN
  // 因此，会导致问题:
  //     isNaN('foo');         // => true
  // <=> isNaN(Number('foo')); // => true
  //
  // 解决方案: 使用 `===`, NaN 是唯一不与自身恒等
  //
  // 从ES6开始，Number提供了 Number.isNaN 来判断是否为 NaN
  // e.g:
  // Number.isNaN('foo'); // => false
  // Number.isNaN(NaN);   // => true
  //
  return val !== val;
}

module.exports = _isNaN;
