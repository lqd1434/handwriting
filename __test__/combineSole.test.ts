import { combineSole } from '../src/Array/combineSole';

test('------combineSole测试结果------', () => {
  expect(combineSole([1, 2, 3], [2, 3])).toStrictEqual([1, 2, 3]);
});
