
var _isObject = require('./isObject');
var _isFunction = require('./isFunction');

/**
 * 校验 `val` 是否为纯粹的 object
 *
 * 若参数 `val` 是纯粹的 object, 则返回 true, 否则返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isPlainObject(val) {
  if (!_isObject(val)) {
    return false;
  }

  var proto = Object.getPrototypeOf(val);

  if (proto === null) {
    return true;
  }

  var ctor = proto.constructor;

  return _isFunction(ctor);
}

module.exports = _isPlainObject;
