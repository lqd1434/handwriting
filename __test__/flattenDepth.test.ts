import { flattenDepth } from '../src/utils/Array/flattenDepth';

const arr = [1, [2, 3, [4, [5]]], 9];

test('------flattenDepth测试结果------', () => {
  expect(flattenDepth(arr, 2)).toStrictEqual([1, 2, 3, 4, [5], 9]);
});
