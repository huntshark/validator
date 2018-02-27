
const JS_TYPE_ENUM = require('./internal/dataTypeEnum');
const assertDataType = require('./internal/assertDataType');

/**
 * 校验`val`是否为 boolean
 *
 * 只有当`val`的类型为`boolean`, 或者`[object Boolean]`, 才为true, 否则返回false
 *
 * @param   {*} val   待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isBoolean(val) {
  return typeof val === JS_TYPE_ENUM.BOOLEAN || assertDataType(JS_TYPE_ENUM.BOOLEAN, val);
}

module.exports = _isBoolean;
