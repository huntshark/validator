
var _isString = require('./isString');
var LOCALE_ENUM = require('./internal/enum/localeTypeEnum');
var REGEX_ENUM = require('./internal/enum/regexEnum');

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
