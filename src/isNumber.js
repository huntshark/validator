
var DATA_TYPE_ENUM = require('./internal/enum/dataTypeEnum');
var assertDataType = require('./internal/assertDataType');

/**
 * 校验参数 `val` 是否为 number
 *
 * 若是参数 `val` 的类型为 `number` 或者 `[object Number]`时，返回 true,
 *
 * 否则，返回 false
 *
 * Number 类型还包括: POSITIVE_INFINITY, NEGATIVE_INFINITY, NaN, ...
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNumber(val) {
  return typeof val === DATA_TYPE_ENUM.NUMBER || assertDataType(DATA_TYPE_ENUM.NUMBER, val);
}

module.exports = _isNumber;
