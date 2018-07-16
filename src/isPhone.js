
var _isMobile = require('./isMobile');
var _isTelephone = require('./isTelephone');

/**
 * 校验参数 `val` 是否为手机号码/座机号码
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
