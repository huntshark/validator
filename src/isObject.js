
var DATA_TYPE_ENUM = require('./internal/enum/dataTypeEnum');
var assertDataType = require('./internal/assertDataType');

/**
 * 校验 `val` 是否为的 object
 *
 * 若是参数 `val` 的类型为 `[object Object]` 时，返回 true,
 *
 * 否则, 返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isObject(val) {
  return assertDataType(DATA_TYPE_ENUM.OBJECT, val);
}

module.exports = _isObject;
