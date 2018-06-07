
var _isArray = require('./isArray');

/**
 * 校验 `val` 是否为空数组
 *
 * 若参数 `val` 不是 array, 则直接返回 false
 * 若参数 `val` 是 array, 并且为空，则返回 true, 否则, 返回 false
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
