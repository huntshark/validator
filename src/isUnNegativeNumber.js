
var _isNumber = require('./isNumber');
var REGEX_ENUM = require('./internal/enum/regexEnum');

/**
 * 校验`val`是否为 非负数, 即正数和0
 *
 * 若`val`为非负数，则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnNegativeNumber(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.UN_NEGATIVE_NUMBER_REX.test(val)) : REGEX_ENUM.UN_NEGATIVE_NUMBER_REX.test(val);
}

module.exports = _isUnNegativeNumber;
