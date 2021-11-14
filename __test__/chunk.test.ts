const { chunk } = require('../src/Array/chunk');

const arr = [1, 2, 3, 4, 5, 6, 7];
test('------chunk测试结果------', () => {
  expect(chunk(arr, 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7]]);
});

console.log(typeof undefined);
console.log(typeof true);
console.log(new Array(1) instanceof Array);
console.log(typeof new Map());
