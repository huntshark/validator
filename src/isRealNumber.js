
var _isNaN = require('./isNaN');
var _isNumber = require('./isNumber');
var _isUnEmptyString = require('./isUnEmptyString');

/**
 * 校验`val`是否为实数, 包含有理数和无理数
 *
 * 若`val`类型为`number`或者可以转换为数字的非空string,
 *
 * 并且不是NaN, 则返回true, 否则，返回false
 *
 * 若是严格模式, 对于字符串数字'3', 直接返回false
 * 若是非严格模式, 对于字符串数字'3', 经过ToNumber('3')转换后，进行判定
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isRealNumber(val, options = {isStrict: false}) {
  if (_isNumber(val)) {
    return !_isNaN(val);
  }

  // 若是非严格模式, 则对字符串'3'进行判定, 需要排除'  '字符串
  if (!options.isStrict && _isUnEmptyString(val, {isStrict: true})) {
    var detal = val - 0;
    return !_isNaN(detal);
  }

  return false;
}

module.exports = _isRealNumber;
