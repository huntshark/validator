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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(4);
var assertDataType = __webpack_require__(5);

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
    'zh-CN': /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
  },
  MOBILE_REX: { // 手机号码|移动电话
    'zh-CN': /^(\+?0?86-?)?1\d{10}$/
  }
};

module.exports = REGEX_ENUM;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(4);
var assertDataType = __webpack_require__(5);

/**
 * 校验 `val` 是否为 number
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


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(4);
var assertDataType = __webpack_require__(5);

/**
 * 校验 `val` 是否为 string
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


/***/ }),
/* 4 */
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

  'FUNCTION',
  'DATE'
].forEach((jsType) => {
  DATA_TYPE_ENUM[jsType] = jsType.toLowerCase();
});

module.exports = DATA_TYPE_ENUM;


/***/ }),
/* 5 */
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var _isNaN = __webpack_require__(7);
var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var _isUnEmptyString = __webpack_require__(9);

/**
 * 校验 `val` 是否为实数(有理数和无理数)
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且不是 NaN, 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且可以经过 ToNumber 转换为非 NaN 的数字, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isRealNumber(val, options) {
  var opts = _isObject(options) ? options : {};

  if (_isNumber(val)) {
    return !_isNaN(val);
  }

  // 若是非严格模式, 则对字符串 '3' 进行判定, 需要排除 '   ' 字符串
  if (opts.isStrict !== true && _isUnEmptyString(val, {isStrict: true})) {
    var detal = val - 0;

    return !_isNaN(detal);
  }

  return false;
}

module.exports = _isRealNumber;


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * 校验 `val` 是否为 NaN
 *
 * 若参数 `val` 是 NaN，则返回 true，否则返回 false
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
  // 解决方案: 使用 `!==`, NaN 是唯一一个不与自身恒等
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
 * 校验 `val` 是否为 Infinity, -Infinity
 *
 * 若参数 `val` 是 Infinity, -Infinity, 则返回 true, 否则返回 false
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


var _isString = __webpack_require__(3);
var _isObject = __webpack_require__(0);

/**
 * 校验 `val` 是否为 非空字符串
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`严格模式`
 *
 * 若参数 `val` 不是 string, 则直接返回 false
 * 若参数 `val` 是 string, 并且不为空，则返回 true, 否则, 返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true,
 * 则会对参数 `val` 进行两端去除空白（空字符），之后在校验其是否为非空字符串
 *
 * e.g
 * 待校验参数 '   '
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnEmptyString(val, options) {
  var opts = _isObject(options) ? options : {};

  if (!_isString(val)) {
    return false;
  }

  return opts.isStrict === false ? val !== '' : (val.trim() !== '');
}

module.exports = _isUnEmptyString;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var _isRealNumber = __webpack_require__(6);
var _isInfinity = __webpack_require__(8);

/**
 * 校验 `val` 是否为数字
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且不是 NaN, Infinity, -Infinity, 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且可以经过 ToNumber 转换为非 NaN, Infinity, -Infinity 的数字, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isNumeric(val, options) {
  return _isRealNumber(val, options) && !_isInfinity(val);
}

module.exports = _isNumeric;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(4);
var assertDataType = __webpack_require__(5);

/**
 * 校验 `val` 是否为 array
 *
 * 若是参数 `val` 的类型为 `[object Array]` 时，返回 true,
 *
 * 否则, 返回 false
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {


var _isObject = __webpack_require__(0);
var _isFunction = __webpack_require__(13);

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


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(4);
var assertDataType = __webpack_require__(5);

/**
 * 校验 `val` 是否为 function
 *
 * 若是参数 `val` 的类型为 `[object Function]` 时，返回 true,
 *
 * 否则, 返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.5
 */
function _isFunction(val) {
  return assertDataType(DATA_TYPE_ENUM.FUNCTION, val);
}

module.exports = _isFunction;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(3);
var LOCALE_ENUM = __webpack_require__(15);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为手机号码
 *
 * 若参数 `val` 符合参数 `locale`(默认值:  LOCALE_ENUM.ZHCN) 指定地区的手机号码格式, 则返回 true, 否则返回 false
 *
 * 若参数 `locale` 指定地区不存在, 同样直接返回 false
 *
 * 对于不同地区使用其所在地区的手机号码校验格式
 *
 * 目前, 仅会对手机号码进行号码段和位数进行校验，不做真实性校验
 *
 * @param   {*}       val    待校验的参数
 * @param   {String}  locale 国际化
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isMobile(val, locale) {
  var key = _isString(locale) ? locale : LOCALE_ENUM.ZHCN;
  var rex = REGEX_ENUM.MOBILE_REX[key];

  if (!rex) {
    return false;
  }

  if (!_isString(val)) {
    return false;
  }

  return rex.test(val);
}

module.exports = _isMobile;


/***/ }),
/* 15 */
/***/ (function(module, exports) {


// 国际化类型
var LOCALE_TYPE_ENUM = {
  'ZHCN': 'zh-CN'
};

module.exports = LOCALE_TYPE_ENUM;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(3);
var LOCALE_ENUM = __webpack_require__(15);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为座机号码
 *
 * 若参数 `val` 符合参数 `locale`(默认值:  LOCALE_ENUM.ZHCN) 指定地区的座机号码格式, 则返回 true, 否则返回 false
 *
 * 若参数 `locale` 指定地区不存在, 同样直接返回 false
 *
 * 对于不同地区使用其所在地区的座机号码校验格式
 *
 * 目前, 仅会对座机号码进行号码段和位数进行校验，不做真实性校验
 *
 * @param   {*}       val    待校验的参数
 * @param   {String}  locale 国际化
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isTelephone(val, locale) {
  var key = _isString(locale) ? locale : LOCALE_ENUM.ZHCN;
  var rex = REGEX_ENUM.TELEPHONE_REX[key];

  if (!rex) {
    return false;
  }

  if (!_isString(val)) {
    return false;
  }

  return rex.test(val);
}

module.exports = _isTelephone;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {


var _isUndefined = __webpack_require__(18);
var _isNull = __webpack_require__(19);
var _isNil = __webpack_require__(20);

var _isBoolean = __webpack_require__(21);

var _isNaN = __webpack_require__(7);
var _isInfinity = __webpack_require__(8);

var _isNumber = __webpack_require__(2);
var _isRealNumber = __webpack_require__(6);
var _isNumeric = __webpack_require__(10);

var _isZero = __webpack_require__(22);
var _isUnZero = __webpack_require__(23);

var _isPositiveNumber = __webpack_require__(24);
var _isNegativeNumber = __webpack_require__(25);
var _isUnPositiveNumber = __webpack_require__(26);
var _isUnNegativeNumber = __webpack_require__(27);

var _isInteger = __webpack_require__(28);
var _isPositiveInteger = __webpack_require__(29);
var _isNegativeInteger = __webpack_require__(30);
var _isUnPositiveInteger = __webpack_require__(31);
var _isUnNegativeInteger = __webpack_require__(32);

var _isString = __webpack_require__(3);
var _isEmptyString = __webpack_require__(33);
var _isUnEmptyString = __webpack_require__(9);

var _isArray = __webpack_require__(11);
var _isEmptyArray = __webpack_require__(34);

var _isObject = __webpack_require__(0);
var _isPlainObject = __webpack_require__(12);

var _isJSON = __webpack_require__(35);

var _isFunction = __webpack_require__(13);

var _isMobile = __webpack_require__(14);
var _isTelephone = __webpack_require__(16);
var _isPhone = __webpack_require__(36);

var _isEmail = __webpack_require__(37);

module.exports = {
  isUndefined: _isUndefined,
  isNull: _isNull,
  isNil: _isNil,

  isBoolean: _isBoolean,

  isNaN: _isNaN,
  isInfinity: _isInfinity,

  isNumber: _isNumber,
  isRealNumber: _isRealNumber,
  isNumeric: _isNumeric,

  isZero: _isZero,
  isUnZero: _isUnZero,

  isPositiveNumber: _isPositiveNumber,
  isNegativeNumber: _isNegativeNumber,
  isUnPositiveNumber: _isUnPositiveNumber,
  isUnNegativeNumber: _isUnNegativeNumber,

  isInteger: _isInteger,
  isPositiveInteger: _isPositiveInteger,
  isNegativeInteger: _isNegativeInteger,
  isUnPositiveInteger: _isUnPositiveInteger,
  isUnNegativeInteger: _isUnNegativeInteger,

  isString: _isString,
  isEmptyString: _isEmptyString,
  isUnEmptyString: _isUnEmptyString,

  isArray: _isArray,
  isEmptyArray: _isEmptyArray,

  isObject: _isObject,
  isPlainObject: _isPlainObject,

  isJSON: _isJSON,

  isFunction: _isFunction,

  isMobile: _isMobile,
  isTelephone: _isTelephone,
  isPhone: _isPhone,

  isEmail: _isEmail
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {


/**
 * 校验 `val` 是否为 undefined,
 *
 * 若是参数 `val` 的值恒等于 undefined, 则返回 true,
 *
 * 否则, 返回 false
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
/* 19 */
/***/ (function(module, exports) {


/**
 * 校验 `val` 是否为 null
 *
 * 若是参数 `val` 的值恒等于 null, 则返回 true,
 *
 * 否则, 返回 false
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
/* 20 */
/***/ (function(module, exports) {


/**
 * 校验 `val` 是否为 null 或 undefined
 *
 * 若是
 *  参数 `val` 的值恒等于 null, 则返回 true,
 *  参数 `val` 的值恒等于 undefined, 则返回 true,
 *
 * 否则, 返回 false
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


var DATA_TYPE_ENUM = __webpack_require__(4);
var assertDataType = __webpack_require__(5);

/**
 * 校验 `val` 是否为 boolean
 *
 * 若是参数 `val` 的类型为 `boolean` 或者 `[object Boolean]` 时, 返回 true,
 *
 * 否则, 返回 false
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {


var _isObject = __webpack_require__(0);
var _isRealNumber = __webpack_require__(6);

/**
 * 校验 `val` 是否为零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且等于零, 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且经过 ToNumber 转换后的数据等于零, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '0'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isZero(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return val === 0;
  }

  return _isRealNumber(val) && val - 0 === 0;
}

module.exports = _isZero;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumeric = __webpack_require__(10);

/**
 * 校验 `val` 是否为 number, 并且不等于零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且不是 NaN, Infinity, -Infinity, 同时也不等于零, 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且经过 ToNumber 转换为非 NaN, Infinity, -Infinity 的数字, 同时也不等于零, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Object}  options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnZero(val, options) {
  return _isNumeric(val, options) && val - 0 !== 0;
}

module.exports = _isUnZero;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为 正数
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是正数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为正数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isPositiveNumber(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.POSITIVE_NUMBER_REX.test(val);
  }

  return REGEX_ENUM.POSITIVE_NUMBER_REX.test(val);
}

module.exports = _isPositiveNumber;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为负数
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是负数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为负数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '-3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isNegativeNumber(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.NEGATIVE_NUMBER_REX.test(val);
  }

  return REGEX_ENUM.NEGATIVE_NUMBER_REX.test(val);
}

module.exports = _isNegativeNumber;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为非正数, 即负数和零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是非正数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为非正数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '-3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnPositiveNumber(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.UN_POSITIVE_NUMBER_REX.test(val);
  }

  return REGEX_ENUM.UN_POSITIVE_NUMBER_REX.test(val);
}

module.exports = _isUnPositiveNumber;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为非负数, 即正数和零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是非负数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为非负数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnNegativeNumber(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.UN_NEGATIVE_NUMBER_REX.test(val);
  }

  return REGEX_ENUM.UN_NEGATIVE_NUMBER_REX.test(val);
}

module.exports = _isUnNegativeNumber;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为 整数
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是整数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为整数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isInteger(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.INTEGER_REX.test(val);
  }

  return REGEX_ENUM.INTEGER_REX.test(val);
}

module.exports = _isInteger;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为 正整数
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是正整数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为正整数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isPositiveInteger(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.POSITIVE_INTEGER_REX.test(val);
  }

  return REGEX_ENUM.POSITIVE_INTEGER_REX.test(val);
}

module.exports = _isPositiveInteger;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为 负整数
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是负整数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为负整数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '-3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isNegativeInteger(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.NEGATIVE_INTEGER_REX.test(val);
  }

  return REGEX_ENUM.NEGATIVE_INTEGER_REX.test(val);
}

module.exports = _isNegativeInteger;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为 非正整数, 即负整数和零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是非正整数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为非正整数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '-3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnPositiveInteger(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.UN_POSITIVE_INTEGER_REX.test(val);
  }

  return REGEX_ENUM.UN_POSITIVE_INTEGER_REX.test(val);
}

module.exports = _isUnPositiveInteger;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


var _isNumber = __webpack_require__(2);
var _isObject = __webpack_require__(0);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为 非负整数, 即正整数和零
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`非严格模式`
 *
 * 若参数 `val` 为 number 类型, 并且是非负整数 则返回 true, 否则返回 false
 * 若参数 `val` 为 string 类型, 并且通过验证为非负整数字符串, 则返回 true, 否则返回 false
 * 若参数 `val` 不属于以上两种类型, 则直接返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true, 则对于 string 类型直接返回 false
 *
 * e.g
 * 待校验参数 '3'
 * 若是严格模式, 则该参数值校验后, 返回 false
 * 若是非严格模式, 则该参数值校验后, 返回 true
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isUnNegativeInteger(val, options) {
  var opts = _isObject(options) ? options : {};

  if (opts.isStrict === true) {
    return _isNumber(val) && REGEX_ENUM.UN_NEGATIVE_INTEGER_REX.test(val);
  }

  return REGEX_ENUM.UN_NEGATIVE_INTEGER_REX.test(val);
}

module.exports = _isUnNegativeInteger;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(3);
var _isObject = __webpack_require__(0);

/**
 * 校验 `val` 是否为 空字符串
 *
 * 该接口存在两种模式, 即严格模式、非严格模式; 默认采用`严格模式`
 *
 * 若参数 `val` 不是 string, 则直接返回 false
 * 若参数 `val` 是 string, 并且为空，则返回 true, 否则, 返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true,
 * 则会对参数 `val` 进行两端去除空白（空字符），之后在校验其是否为空字符串
 *
 * e.g
 * 待校验参数 '   '
 * 若是严格模式, 则该参数值校验后, 返回 true
 * 若是非严格模式, 则该参数值校验后, 返回 false
 *
 * @param   {*}       val              待校验的参数
 * @param   {Object}  options          可选参数
 * @param   {Boolean} options.isStrict 是否严格模式
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.5
 */
function _isEmptyString(val, options) {
  var opts = _isObject(options) ? options : {};

  if (!_isString(val)) {
    return false;
  }

  return opts.isStrict === false ? val === '' : (val.trim() === '');
}

module.exports = _isEmptyString;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {


var _isArray = __webpack_require__(11);

/**
 * 校验 `val` 是否为空数组
 *
 * 若参数 `val` 不是 array, 则直接返回 false
 * 若参数 `val` 是 array, 并且为空，则返回 true, 否则, 返回 false
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(3);
var _isPlainObject = __webpack_require__(12);

/**
 * 校验 `val` 是否为 JSON 对象
 *
 * 若参数 `val` 是 JSON 对象, 则返回 true, 否则返回 false
 *
 * @param   {*}       val 待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.5
 */
function _isJSON(val) {
  if (!_isString(val)) {
    return false;
  }

  try {
    var jsonObj = JSON.parse(val);

    return _isPlainObject(jsonObj);
  } catch (e) {
    return false;
  }
}

module.exports = _isJSON;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {


var _isMobile = __webpack_require__(14);
var _isTelephone = __webpack_require__(16);

/**
 * 校验 `val` 是否为手机号码/座机号码
 *
 * 若参数 `val` 符合参数 `locale`(默认值:  LOCALE_ENUM.ZHCN) 指定地区的号码格式, 则返回 true, 否则返回 false
 *
 * 若参数 `locale` 指定地区不存在, 同样直接返回 false
 *
 * 对于不同地区使用其所在地区的号码校验格式
 *
 * 目前, 仅会对号码进行号码段和位数进行校验，不做真实性校验
 *
 * @param   {*}       val    待校验的参数
 * @param   {String}  locale 国际化
 * @return  {Boolean} 返回校验结果
 * @version 0.0.5
 * @since   0.0.4
 */
function _isPhone(val, locale) {
  return _isMobile(val, locale) || _isTelephone(val, locale);
}

module.exports = _isPhone;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {


var _isString = __webpack_require__(3);
var REGEX_ENUM = __webpack_require__(1);

/**
 * 校验 `val` 是否为邮箱
 *
 * 若参数 `val` 是邮箱, 则返回 true, 否则返回 false
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


/***/ })
/******/ ]);
});