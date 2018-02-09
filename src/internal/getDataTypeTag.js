
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

// 数据类型引用
var TRUE_BOOLEAN = true; // [object Boolean]
var ZEOR_NUMBER = 0; // [object Number]
var EMPTY_STRING = ''; // [object String]

var EMPTY_ARRAY = []; // [object Array]
var DATE = new Date(); // [object Date]

var DATA_TYPE_ENUM = {}; // [object Object]

[
  NULL,
  UNDEFINED,
  TRUE_BOOLEAN,
  ZEOR_NUMBER,
  EMPTY_STRING,
  EMPTY_ARRAY,
  DATA_TYPE_ENUM,
  DATE,
  _toString
].forEach((val) => {
  var type;

  if (val === NULL) {
    type = OBJECT_NULL;
  } else if (val === UNDEFINED) {
    type = OBJECT_UNDEFINED;
  } else {
    type = _toString.call(val);
  }

  var dataType = type.replace(DATA_TYPE_REPLACE_REX, '').toLowerCase();

  DATA_TYPE_ENUM[dataType] = type;
});

/**
 * 获取`type`对应的数据类型
 *
 * @param   {string} type 数据类型
 * @return  {string} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _getDataType(type) {
  return type ? DATA_TYPE_ENUM[type.toLowerCase()] : UNDEFINED;
}

module.exports = _getDataType;
