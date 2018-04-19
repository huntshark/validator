
var _isArray = require('./isArray');

/**
 * 校验`val`是否为 空数组
 *
 * 若是为空数组，则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isEmptyArray(val) {
  if (!_isArray(val)) {
    return false;
  }

  return val.length === 0;
}

module.exports = _isEmptyArray;
