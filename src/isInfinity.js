
// 正无穷, 负无穷
var POSITIVE_INFINITY = 1 / 0;
var NEGATIVE_INFINITY = -1 / 0;

/**
 * 校验参数 `val` 是否为 Infinity, -Infinity
 *
 * 若参数 `val` 是 Infinity, -Infinity, 则返回 true, 否则返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isInfinity(val) {
  return val === POSITIVE_INFINITY || val === NEGATIVE_INFINITY;
}

module.exports = _isInfinity;
