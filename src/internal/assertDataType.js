
var getDataTypeTag = require('./getDataTypeTag');

/**
 * 断言`val`的数据类型是否为`type`对应的数据类型
 *
 * @param   {string} type 数据类型
 * @param   {*}      val  待校验的数据
 * @return  {string} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _assertDataType(type, val) {
  if (val === void 0 || val === null) {
    return false;
  }

  var dataType = getDataTypeTag(type);

  return dataType === Object.prototype.toString.call(val);
}

module.exports = _assertDataType;
