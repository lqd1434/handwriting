import { concat } from '../src/Array/concat';

test('------concat测试结果------', () => {
  expect(concat([1], 3, [2, 4], { a: 1 })).toStrictEqual([1, 3, 2, 4, { a: 1 }]);
});
