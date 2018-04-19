
var _isString = require('./isString');
var LOCALE_ENUM = require('./internal/enum/localeTypeEnum');
var REGEX_ENUM = require('./internal/enum/regexEnum');

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
