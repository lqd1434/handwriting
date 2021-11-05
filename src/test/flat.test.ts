import { flat } from '../utils/Array/flat';

const arr = [1, 2, [3, 4, 5, [6, 7]]];

test('------flat测试结果------', () => {
  expect(flat(arr)).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
});
