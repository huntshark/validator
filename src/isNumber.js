
var DATA_TYPE_ENUM = require('./internal/enum/dataTypeEnum');
var assertDataType = require('./internal/assertDataType');

/**
 * 校验`val`是否为 number
 *
 * 只有当`val`类型为`number`或者`[object Number]`时，返回true, 否则返回false
 *
 * Number 包括: POSITIVE_INFINITY, NEGATIVE_INFINITY
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
