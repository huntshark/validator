
var _isObject = require('./isObject');

/**
 * 校验`val`是否为的`纯粹`的object
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isPlainObject(val) {
  if (_isObject(val)) {
    return val.prototype === null;
  }

  return false;
}

module.exports = _isPlainObject;
