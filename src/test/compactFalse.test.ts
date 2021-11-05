import { compactFalse } from '../utils/Array/compactFalse';

const arr = [1, 0, 2, '', null, undefined, {}, NaN, []];
test('------compactFalse测试结果------', () => {
  expect(compactFalse(arr)).toStrictEqual([1, 2]);
});
