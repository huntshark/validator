
/**
 * 校验参数 `val` 是否为 undefined,
 *
 * 若是参数 `val` 的值恒等于 undefined, 则返回 true,
 *
 * 否则, 返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isUndefined(val) {
  return val === void 0;
}

module.exports = _isUndefined;
