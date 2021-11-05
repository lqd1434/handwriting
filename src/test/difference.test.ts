import { difference } from '../utils/Array/difference';

test('------difference测试结果------', () => {
  expect(difference([1, 2, 3, 4], [1, 3])).toStrictEqual([2, 4]);
});
