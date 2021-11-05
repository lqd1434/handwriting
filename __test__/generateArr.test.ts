const { generateArr } = require('../src/Array/generateArr');

test('------findIndex测试结果------', () => {
  expect(generateArr(3, 2)).toStrictEqual([2, 2, 2]);
});
