import { findIndex } from '../src/utils/Array/findIndex';

const arr = [
  { name: '2', age: 101 },
  { name: '1', age: 100, obj: { id: 1 } },
  { name: '3', age: 102 }
];
const ele1 = { name: '1', age: 100, obj: { id: 1 } };
const ele2 = { name: '3', age: 102 };

test('------findIndex测试结果------', () => {
  expect(findIndex(arr, ele1)).toBe(1);
  expect(findIndex(arr, ele2)).toBe(2);
});
