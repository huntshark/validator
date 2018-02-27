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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var _isUndefined = __webpack_require__(1);
var _isNull = __webpack_require__(2);
var _isNil = __webpack_require__(3);

var _isBoolean = __webpack_require__(4);

module.exports = {
  isUndefined: _isUndefined,
  isNull: _isNull,
  isNil: _isNil,

  isBoolean: _isBoolean
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 undefined
 *
 * @param   {*} val   待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isUndefined(val) {
  return val === void 0;
}

module.exports = _isUndefined;


/***/ }),
/* 2 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 null
 *
 * @param   {*} val   待校验的参数
 * @return  {Boolean} 返回校验结果
 * @version 0.0.1
 * @since   0.0.1
 */
function _isNull(val) {
  return val === null;
}

module.exports = _isNull;


/***/ }),
/* 3 */
/***/ (function(module, exports) {


/**
 * 校验`val`是否为 null 或 undefined
 *
 * @param   {*} val   待校验的参数
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


const JS_TYPE_ENUM = __webpack_require__(5);
const assertDataType = __webpack_require__(6);

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


/***/ }),
/* 5 */
/***/ (function(module, exports) {


// js数据类型
var DATA_TYPE_ENUM = {};

// 存储类型
[ 'NULL',
  'UNDEFINED',
  'BOOLEAN',
  'NUMBER',
  'STRING',
  'SYMBOL',
  'OBJECT',
  'DATE',
  'ARRAY',
  'SET',
  'MAP',
  'WEAKSET',
  'WEAKMAP'
].forEach((jsType) => {
  DATA_TYPE_ENUM[jsType] = jsType.toLowerCase();
});

module.exports = DATA_TYPE_ENUM;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


var getDataTypeTag = __webpack_require__(7);

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


/***/ }),
/* 7 */
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


/***/ })
/******/ ]);
});