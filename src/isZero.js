
var _isNumeric = require('./isNumeric');

/**
 * 校验`val`是否为 0
 *
 * 若`val`为 0, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isZero(val, options = {isStrict: false}) {
  return options.isStrict ? val === 0 : (_isNumeric(val) && val - 0 === 0);
}

module.exports = _isZero;
