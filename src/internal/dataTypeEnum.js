
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
