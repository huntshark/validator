
var _isString = require('./isString');
var REGEX_ENUM = require('./internal/enum/regexEnum');

/**
 * 校验`val`是否为 邮箱
 *
 * 若是邮箱, 则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isEmail(val) {
  if (!_isString(val)) {
    return false;
  }

  return REGEX_ENUM.EMAIL_REX.test(val);
}

module.exports = _isEmail;
