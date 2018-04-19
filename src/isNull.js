
/**
 * 校验`val`是否为 null
 *
 * 若`val`是null, 则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNull(val) {
  return val === null;
}

module.exports = _isNull;
