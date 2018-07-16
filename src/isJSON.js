
var _isString = require('./isString');
var _isPlainObject = require('./isPlainObject');

/**
 * 校验参数 `val` 是否为 JSON 对象
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
