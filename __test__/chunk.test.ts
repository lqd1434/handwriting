/**
 * @jest-environment jsdom
 */

const { chunk } = require('../src/Array/chunk');

const arr = [1, 2, 3, 4, 5, 6, 7];
test('------chunk测试结果------', () => {
  expect(chunk(arr, 3)).toStrictEqual([[1, 2, 3], [4, 5, 6], [7]]);
});
const divEle = document.createElement('div');
// @ts-ignore
console.log({ a: 1 }.nodeType === 1);
