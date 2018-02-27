
/**
 * 校验`val`是否为 null 或 undefined
 *
 * @param   {*} val   待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNil(val) {
  // return val == null;
  return val === void 0 || val === null;
}

module.exports = _isNil;