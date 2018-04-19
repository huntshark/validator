
var _isMobile = require('./isMobile');
var _isTelephone = require('./isTelephone');
var LOCALE_ENUM = require('./internal/enum/localeTypeEnum');

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
