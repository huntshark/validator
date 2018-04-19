
// 正无穷, 负无穷
var POSITIVE_INFINITY = 1 / 0;
var NEGATIVE_INFINITY = -1 / 0;

/**
 * 校验`val`是否为无穷Infinity
 *
 * 若是Infinity, 则返回true, 否则返回false
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
