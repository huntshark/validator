(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jxmValidator"] = factory();
	else
		root["jxmValidator"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(2);
var assertDataType = __webpack_require__(3);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {


// 正则表达式
var REGEX_ENUM = {
  INTEGER_REX: /^-?\d+$/, // 整数
  POSITIVE_INTEGER_REX: /^[1-9]\d*$/, // 正整数
  NEGATIVE_INTEGER_REX: /^-[1-9]\d*$/, // 负整数
  UN_POSITIVE_INTEGER_REX: /^-[1-9]\d*$|^0$/, // 非正整数
  UN_NEGATIVE_INTEGER_REX: /^[1-9]\d*$|^0$/, // 非负整数

  POSITIVE_NUMBER_REX: /^[1-9]\d*(\.\d)*$|^0\.\d*[1-9]\d*$/, // 正数
  NEGATIVE_NUMBER_REX: /^-[1-9]\d*(\.\d)*$|^-0\.\d*[1-9]\d*$/, // 负数
  UN_NEGATIVE_NUMBER_REX: /^[1-9]\d*(\.\d)*$|^0\.\d*[1-9]\d*$|^0$/, // 非负数
  UN_POSITIVE_NUMBER_REX: /^-[1-9]\d*(\.\d)*$|^-0\.\d*[1-9]\d*$|^0$/, // 非正数

  EMAIL_REX: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, // 邮箱
  TELEPHONE_REX: { // 座机
    'zh-CN': /^/
  },
  MOBILE_REX: { // 手机号码|移动电话
    'zh-CN': /^(\+?0?86-?)?1\d{10}$/
  }
};

module.exports = REGEX_ENUM;


/***/ }),
/* 2 */
/***/ (function(module, exports) {


// Js数据类型
var DATA_TYPE_ENUM = {};

// 存储类型
[ 'NULL',
  'UNDEFINED',

  'BOOLEAN',
  'NUMBER',
  'STRING',
  'SYMBOL',

  'OBJECT',
  'ARRAY',
  'SET',
  'MAP',
  'WEAKSET',
  'WEAKMAP',

  'DATE'
].forEach((jsType) => {
  DATA_TYPE_ENUM[jsType] = jsType.toLowerCase();
});

module.exports = DATA_TYPE_ENUM;


/***/ }),
/* 3 */
/***/ (function(module, exports) {


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
 * @param   {string} type 数据类型
 * @param   {*}      val  待校验的数据
 * @returns {string} 返回校验结果
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(2);
var assertDataType = __webpack_require__(3);

/**
 * 校验`val`是否为string
 *
 * 只有当`val`类型为`string`或者`[object String]`时，返回true, 否则返回false
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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


var _isRealNumber = __webpack_require__(9);
var _isInfinity = __webpack_require__(8);

/**
 * 校验`val`是否为数字
 *
 * 若`val`类型为`number`或者可以转换为数字的非空string,
 *
 * 并且不是NaN, Infinity, -Infinity, 则返回true, 否则，返回false
 *
 * 若是严格模式, 对于字符串数字'3', 直接返回false
 * 若是非严格模式, 对于字符串数字'3', 经过ToNumber('3')转换后，进行判定
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isNumeric(val, options = {isStrict: false}) {
  return _isRealNumber(val, options) && !_isInfinity(val);
}

module.exports = _isNumeric;


/***/ }),
/* 6 */
/***/ (function(module, exports) {


// 国际化类型
var LOCALE_TYPE_ENUM = {
  'ZHCN': 'zh-CN'
};

module.exports = LOCALE_TYPE_ENUM;


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 NaN
 *
 * 若`val`是NaN，则返回true，否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNaN(val) {
  // @TODO
  //
  // 引用: ECMAScript5.1 15章节 [15.1.2.4](https://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4)
  // 全局对象函数 isNaN 存在如下怪异行为: 它总是先将参数转化成数字，然后再来判断是否是 NaN
  // 因此，会导致问题:
  //     isNaN('foo');         // => true
  // <=> isNaN(Number('foo')); // => true
  //
  // 解决方案: 使用 `===`, NaN 是唯一不与自身恒等
  //
  // 从ES6开始，Number提供了 Number.isNaN 来判断是否为 NaN
  // e.g:
  // Number.isNaN('foo'); // => false
  // Number.isNaN(NaN);   // => true
  //
  return val !== val;
}

module.exports = _isNaN;


/***/ }),
/* 8 */
/***/ (function(module, exports) {


// 正无穷, 负无穷
var POSITIVE_INFINITY = 1 / 0;
var NEGATIVE_INFINITY = -1 / 0;

/**
 * 校验`val`是否为无穷Infinity
 *
 * 若是Infinity, 则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isInfinity(val) {
  return val === POSITIVE_INFINITY || val === NEGATIVE_INFINITY;
}

module.exports = _isInfinity;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


var _isNaN = __webpack_require__(7);
var _isNumber = __webpack_require__(0);
var _isUnEmptyString = __webpack_require__(10);

/**
 * 校验`val`是否为实数, 包含有理数和无理数
 *
 * 若`val`类型为`number`或者可以转换为数字的非空string,
 *
 * 并且不是NaN, 则返回true, 否则，返回false
 *
 * 若是严格模式, 对于字符串数字'3', 直接返回false
 * 若是非严格模式, 对于字符串数字'3', 经过ToNumber('3')转换后，进行判定
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isRealNumber(val, options = {isStrict: false}) {
  if (_isNumber(val)) {
    return !_isNaN(val);
  }

  // 若是非严格模式, 则对字符串'3'进行判定, 需要排除'  '字符串
  if (!options.isStrict && _isUnEmptyString(val, {isStrict: true})) {
    var detal = val - 0;
    return !_isNaN(detal);
  }

  return false;
}

module.exports = _isRealNumber;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(4);

/**
 * 校验`val`是否为非空字符串
 *
 * 参数`val`是字符串, 但不是空字符串
 *
 * 若是严格模式, 则' '不属于空字符串
 * 若是非严格模式, 则' '属于空字符串
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnEmptyString(val, options = {isStrict: true}) {
  if (!_isString(val)) {
    return false;
  }

  return options.isStrict ? (val.trim() !== '') : val !== '';
}

module.exports = _isUnEmptyString;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(11);

/**
 * 校验`val`是否为 非正数, 即负数和0
 *
 * 若`val`为非正数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnPositiveNumber(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.UN_POSITIVE_NUMBER_REX.test(val)) : REGEX_ENUM.UN_POSITIVE_NUMBER_REX.test(val);
}

module.exports = _isUnPositiveNumber;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(2);
var assertDataType = __webpack_require__(3);

/**
 * 校验`val`是否为array
 *
 * 只有当`val`的类型为`[object Array]时, 返回true, 否则返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isArray(val) {
  return assertDataType(DATA_TYPE_ENUM.ARRAY, val);
}

module.exports = _isArray;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(2);
var assertDataType = __webpack_require__(3);

/**
 * 校验`val`是否为的 object
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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(4);
var LOCALE_ENUM = __webpack_require__(6);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为手机号码
 *
 * 对于不同地区使用不同地方的地区校验格式
 *
 * 若是严格模式, 则需要保持当前使用的号码段【暂不支持】
 * 若是非严格模式，则仅需要对号码段和位数进行校验
 *
 * @param   {*}       val              待校验的参数
 * @param   {String}  locale           国际化地区
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isMobile(val, locale = LOCALE_ENUM.ZHCN, options = {isStrict: false}) {
  if (!_isString(val)) {
    return false;
  }

  let key = options.isStrict ? `${locale}-strict` : locale;
  let rex = REGEX_ENUM.MOBILE_REX[key];

  if (!rex) {
    throw options.isStrict ? new Error('暂不支持该地区手机号码验证') : new Error('暂不支持该地区手机号码的严格验证模式');
  }

  return rex.test(val);
}

module.exports = _isMobile;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(4);
var LOCALE_ENUM = __webpack_require__(6);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为座机号码
 *
 * 对于不同地区使用不同地方的地区校验格式
 *
 * 若是严格模式, 则需要保持当前使用的号码段【暂不支持】
 * 若是非严格模式，则仅需要对号码段和位数进行校验
 *
 * @param   {*}       val              待校验的参数
 * @param   {String}  locale           国际化地区
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isTelephone(val, locale = LOCALE_ENUM.ZHCN, options = {isStrict: false}) {
  if (!_isString(val)) {
    return false;
  }

  let key = options.isStrict ? `${locale}-strict` : locale;
  let rex = REGEX_ENUM.TELEPHONE_REX[key];

  if (!rex) {
    throw options.isStrict ? new Error('暂不支持该地区座机号码验证') : new Error('暂不支持该地区手机号码的严格验证模式');
  }

  return rex.test(val);
}

module.exports = _isTelephone;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var _isUndefined = __webpack_require__(17);
var _isNull = __webpack_require__(18);
var _isNil = __webpack_require__(19);

var _isBoolean = __webpack_require__(20);

var _isNaN = __webpack_require__(7);
var _isInfinity = __webpack_require__(8);

var _isNumber = __webpack_require__(0);
var _isNumeric = __webpack_require__(5);
var _isRealNumber = __webpack_require__(9);

var _isInteger = __webpack_require__(21);
var _isPositiveInteger = __webpack_require__(22);
var _isNegativeInteger = __webpack_require__(23);
var _isUnPositiveInteger = __webpack_require__(24);
var _isUnNegativeInteger = __webpack_require__(25);

var _isPositiveNumber = __webpack_require__(26);
var _isNegativeNumber = __webpack_require__(27);
var _isUnPositiveNumber = __webpack_require__(11);
var _isUnNegativeNumber = __webpack_require__(28);

var _isZero = __webpack_require__(29);
var _isUnZero = __webpack_require__(30);

var _isString = __webpack_require__(4);
var _isUnEmptyString = __webpack_require__(10);

var _isArray = __webpack_require__(12);
var _isEmptyArray = __webpack_require__(31);

var _isObject = __webpack_require__(13);
var _isPlainObject = __webpack_require__(32);

var _isEmail = __webpack_require__(33);
var _isMobile = __webpack_require__(14);
var _isTelephone = __webpack_require__(15);
var _isPhone = __webpack_require__(34);

module.exports = {
  isUndefined: _isUndefined,
  isNull: _isNull,
  isNil: _isNil,

  isBoolean: _isBoolean,

  isNaN: _isNaN,
  isInfinity: _isInfinity,

  isNumber: _isNumber,
  isNumeric: _isNumeric,
  isRealNumber: _isRealNumber,

  isInteger: _isInteger,
  isPositiveInteger: _isPositiveInteger,
  isNegativeInteger: _isNegativeInteger,
  isUnPositiveInteger: _isUnPositiveInteger,
  isUnNegativeInteger: _isUnNegativeInteger,

  isPositiveNumber: _isPositiveNumber,
  isNegativeNumber: _isNegativeNumber,
  isUnPositiveNumber: _isUnPositiveNumber,
  isUnNegativeNumber: _isUnNegativeNumber,

  isZero: _isZero,
  isUnZero: _isUnZero,

  isString: _isString,
  isUnEmptyString: _isUnEmptyString,

  isArray: _isArray,
  isEmptyArray: _isEmptyArray,

  isObject: _isObject,
  isPlainObject: _isPlainObject,

  isEmail: _isEmail,
  isMobile: _isMobile,
  isTelephone: _isTelephone,
  isPhone: _isPhone
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 undefined
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isUndefined(val) {
  return val === void 0;
}

module.exports = _isUndefined;


/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 null
 *
 * 若`val`是null, 则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNull(val) {
  return val === null;
}

module.exports = _isNull;


/***/ }),
/* 19 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 null或undefined
 *
 * 若`val`是null或undefined, 则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNil(val) {
  // return val == null;
  return val === void 0 || val === null;
}

module.exports = _isNil;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(2);
var assertDataType = __webpack_require__(3);

/**
 * 校验`val`是否为 boolean
 *
 * 只有当`val`的类型为`boolean`或者`[object Boolean]`时, 返回true, 否则返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isBoolean(val) {
  return typeof val === DATA_TYPE_ENUM.BOOLEAN || assertDataType(DATA_TYPE_ENUM.BOOLEAN, val);
}

module.exports = _isBoolean;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 整数
 *
 * 若`val`是整数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isInteger(val, options = {isStrict: false}) {
  return options.isStrict ?
    (_isNumber(val) && REGEX_ENUM.INTEGER_REX.test(val)) : REGEX_ENUM.INTEGER_REX.test(val);
}

module.exports = _isInteger;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 正整数
 *
 * 若`val`是正整数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isPositiveInteger(val, options = {isStrict: false}) {
  return options.isStrict ?
    (_isNumber(val) && REGEX_ENUM.POSITIVE_INTEGER_REX.test(val)) : REGEX_ENUM.POSITIVE_INTEGER_REX.test(val);
}

module.exports = _isPositiveInteger;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 负整数
 *
 * 若`val`是负整数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isNegativeInteger(val, options = {isStrict: false}) {
  return options.isStrict ?
    (_isNumber(val) && REGEX_ENUM.NEGATIVE_INTEGER_REX.test(val)) : REGEX_ENUM.NEGATIVE_INTEGER_REX.test(val);
}

module.exports = _isNegativeInteger;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 非正整数, 即负整数和0
 *
 * 若`val`是非正整数, 则返回true, 否则, 返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnPositiveInteger(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.UN_POSITIVE_INTEGER_REX.test(val)) : REGEX_ENUM.UN_POSITIVE_INTEGER_REX.test(val);
}

module.exports = _isUnPositiveInteger;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 非负整数, 即正整数和0
 *
 * 若`val`为非负整数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnNegativeInteger(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.UN_NEGATIVE_INTEGER_REX.test(val)) : REGEX_ENUM.UN_NEGATIVE_INTEGER_REX.test(val);
}

module.exports = _isUnNegativeInteger;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 正数
 *
 * 若`val`为正数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isPositiveNumber(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.POSITIVE_NUMBER_REX.test(val)) : REGEX_ENUM.POSITIVE_NUMBER_REX.test(val);
}

module.exports = _isPositiveNumber;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 负数
 *
 * 若`val`为负数, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isNegativeNumber(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.NEGATIVE_NUMBER_REX.test(val)) : REGEX_ENUM.NEGATIVE_NUMBER_REX.test(val);
}

module.exports = _isNegativeNumber;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 非负数, 即正数和0
 *
 * 若`val`为非负数，则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnNegativeNumber(val, options = {isStrict: false}) {
  return options.isStrict
    ? (_isNumber(val) && REGEX_ENUM.UN_NEGATIVE_NUMBER_REX.test(val)) : REGEX_ENUM.UN_NEGATIVE_NUMBER_REX.test(val);
}

module.exports = _isUnNegativeNumber;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumeric = __webpack_require__(5);

/**
 * 校验`val`是否为 0
 *
 * 若`val`为 0, 则返回true, 否则返回false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isZero(val, options = {isStrict: false}) {
  return options.isStrict ? val === 0 : (_isNumeric(val) && val - 0 === 0);
}

module.exports = _isZero;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumeric = __webpack_require__(5);

/**
 * 校验`val`是否为 非0 数字
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          附加选项
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isUnZero(val, options = {isStrict: false}) {
  return _isNumeric(val, options) && val - 0 !== 0;
}

module.exports = _isUnZero;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var _isArray = __webpack_require__(12);

/**
 * 校验`val`是否为 空数组
 *
 * 若是为空数组，则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isEmptyArray(val) {
  if (!_isArray(val)) {
    return false;
  }

  return val.length === 0;
}

module.exports = _isEmptyArray;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


var _isObject = __webpack_require__(13);

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


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(4);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验`val`是否为 邮箱
 *
 * 若是邮箱, 则返回true, 否则返回false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isEmail(val) {
  if (!_isString(val)) {
    return false;
  }

  return REGEX_ENUM.EMAIL_REX.test(val);
}

module.exports = _isEmail;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var _isMobile = __webpack_require__(14);
var _isTelephone = __webpack_require__(15);
var LOCALE_ENUM = __webpack_require__(6);

/**
 * 校验`val`是否为号码
 *
 * 包括: 手机号码，座机号码
 *
 * 对于不同地区使用不同地方的地区校验格式
 *
 * @param   {*}       val              待校验的参数
 * @param   {String}  locale           国际化地区
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.4
 * @since   0.0.4
 */
function _isPhone(val, locale = LOCALE_ENUM.ZHCN, options = {isStrict: false}) {
  return _isMobile(val, locale, options) || _isTelephone(val, locale, options);
}

module.exports = _isPhone;


/***/ })
/******/ ]);
});