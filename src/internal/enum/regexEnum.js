
// 正则表达式
var REGEX_ENUM = {
  // POSITIVE_NUMBER_REX: /^[1-9]\d*((\.\d+))?$|^0?\.\d*[1-9]\d*$/, // 正数
  POSITIVE_NUMBER_REX: /^[1-9]\d*(\.\d*)?$|^0?\.\d*[1-9]\d*$/, // 正数
  NEGATIVE_NUMBER_REX: /^-[1-9]\d*(\.\d*)?$|^-0?\.\d*[1-9]\d*$/, // 负数
  // UN_POSITIVE_NUMBER_REX: /^-[1-9]\d*(\.\d*)?$|^-0?\.\d*[1-9]\d*$|^0*(.)?0*$/, // 非正数
  // UN_NEGATIVE_NUMBER_REX: /^[1-9]\d*(\.\d*)?$|^0?\.\d*[1-9]\d*$|^0*(.)?0*$/, // 非负数

  INTEGER_REX: /^-?\d+$/, // 整数
  POSITIVE_INTEGER_REX: /^[1-9]\d*$/, // 正整数
  NEGATIVE_INTEGER_REX: /^-[1-9]\d*$/, // 负整数
  UN_POSITIVE_INTEGER_REX: /^-[1-9]\d*$|^0$/, // 非正整数
  UN_NEGATIVE_INTEGER_REX: /^[1-9]\d*$|^0$/, // 非负整数

  LEFT_WHITE_SPACE_REX: /^\s\s*/, // 左空白
  RIGHT_WHITE_SPACE_REX: /\s\s*$/, // 右空白

  TELEPHONE_REX: { // 座机
    'zh-CN': /^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$/
  },
  MOBILE_REX: { // 手机号码|移动电话
    'zh-CN': /^(\+?0?86-?)?1\d{10}$/
  },

  EMAIL_REX: /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/, // 邮箱

  // ipv4
  IPV4_REX: /\b((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\.((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\.((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\.((?!\d\d\d)\d+|1\d\d|2[0-4]\d|25[0-5])\b/
};

module.exports = REGEX_ENUM;
