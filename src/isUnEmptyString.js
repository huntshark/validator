
var _isString = require('./isString');

/**
 * 校验`val`是否为非空字符串
 *
 * 参数`val`是字符串, 但不是空字符串
 *
 * 若是严格模式, 则' '不属于空字符串
 * 若是非严格模式, 则' '属于空字符串
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnEmptyString(val, options = {isStrict: true}) {
  if (!_isString(val)) {
    return false;
  }

  return options.isStrict ? (val.trim() !== '') : val !== '';
}

module.exports = _isUnEmptyString;
