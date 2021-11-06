import { sort } from '../src/Array/sort';

const func = (a, b) => a > b;

test('------compactFalse测试结果------', () => {
  expect(sort([1, 3, 2, 5, 4], func)).toStrictEqual([1, 2, 3, 4, 5]);
});
