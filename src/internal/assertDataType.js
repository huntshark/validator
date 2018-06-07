
// 定义 NULL, UNDEFINED 类型
var NULL = null;
var UNDEFINED;

var OBJECT_NULL = '[object Null]';
var OBJECT_UNDEFINED = '[object Undefined]';

// var OBJECT_SYMBOL = '[object Symbol]';

// var OBJECT_MAP = '[object Map]';
// var OBJECT_SET = '[object Set]';
// var OBJECT_WEAKMAP = '[object WeakMap]';
// var OBJECT_WEAKSET = '[object WeakSet]';

// 提取数据类型
// e.g [object Array] => Array
var DATA_TYPE_REPLACE_REX = /^\[object\u0020|\]$/ig;

// 方法引用
var _toString = Object.prototype.toString;

/**
 * 断言`val`的数据类型是否为`type`对应的数据类型
 *
 * 若是参数`val`的数据类型与`type`相同，则返回 true,
 *
 * 若是不相同，则返回 false
 *
 * @param   {string} type 数据类型
 * @param   {*}      val  待校验的数据
 * @return  {string} 返回校验结果
 * @version 0.0.4
 * @since   0.0.1
 */
function _assertDataType(type, val) {
  var dataType;

  if (val === UNDEFINED) {
    dataType = OBJECT_UNDEFINED;
  } else if (val === NULL) {
    dataType = OBJECT_NULL;
  } else {
    dataType = _toString.call(val);
  }

  var lowerCaseType = dataType.replace(DATA_TYPE_REPLACE_REX, '').toLowerCase();

  return lowerCaseType === type;
}

module.exports = _assertDataType;
