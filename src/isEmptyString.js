
var _isString = require('./isString');
var _isObject = require('./isObject');

/**
 * 校验参数 `val` 是否为 空字符串
 *
 * 该接口存在两种模式, 即严格模式、非严格模式;
 *
 * 默认采用 `严格模式`
 *
 * 若参数 `val` 不是 string, 则直接返回 false
 * 若参数 `val` 是 string, 并且为空，则返回 true, 否则, 返回 false
 *
 * 若是参数 `options` 指定了严格模式, 即 options.isStrict = true,
 * 则会对参数 `val` 进行两端去除空白（空字符），之后在校验其是否为空字符串
 *
 * e.g.
 *
 * 待校验参数 '   '
 * > 若是严格模式, 则该参数值校验后, 返回 true
 * > 若是非严格模式, 则该参数值校验后, 返回 false
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
