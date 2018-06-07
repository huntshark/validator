
var _isNumeric = require('./isNumeric');

/**
 * 校验 `val` 是否为 number, 并且不等于零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且不是 NaN, Infinity, -Infinity, 同时也不等于零, 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且经过 ToNumber 转换为非 NaN, Infinity, -Infinity 的数字, 同时也不等于零, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnZero(val, options) {
  return _isNumeric(val, options) && val - 0 !== 0;
}

module.exports = _isUnZero;
