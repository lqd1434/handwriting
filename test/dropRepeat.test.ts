import { dropRepeat } from '../src/utils/Array/dropRepeat';

const arr = [1, 2, 2, 3, 3, 4];

test('------dropRepeat测试结果------', () => {
  expect(dropRepeat(arr)).toStrictEqual([1, 2, 3, 4]);
});
