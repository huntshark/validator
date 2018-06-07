
/**
 * 校验 `val` 是否为 null 或 undefined
 *
 * 若是
 *  参数 `val` 的值恒等于 null, 则返回 true,
 *  参数 `val` 的值恒等于 undefined, 则返回 true,
 *
 * 否则, 返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNil(val) {
  // return val == null;
  return val === void 0 || val === null;
}

module.exports = _isNil;
