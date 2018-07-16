
var _isString = require('./isString');
var REGEX_ENUM = require('./internal/enum/regexEnum');

/**
 * 校验参数 `val` 是否为 ipv4
 *
 * 若参数 `val` 是 ipv4, 则返回 true, 否则返回 false
 *
 * @param   {*}       val    待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.6
 * @since   0.0.6
 */
function _isIpv4(val) {
  if (!_isString(val)) {
    return false;
  }

  return REGEX_ENUM.IPV4_REX.test(val);
}

module.exports = _isIpv4;
