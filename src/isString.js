
var DATA_TYPE_ENUM = require('./internal/enum/dataTypeEnum');
var assertDataType = require('./internal/assertDataType');

/**
 * 校验参数 `val` 是否为 string
 *
 * 若参数 `val` 类型为 `string` 或者 `[object String]` 时，返回 true,
 *
 * 否则, 返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isString(val) {
  return typeof val === DATA_TYPE_ENUM.STRING || assertDataType(DATA_TYPE_ENUM.STRING, val);
}

module.exports = _isString;
