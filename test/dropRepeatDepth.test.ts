import { dropRepeatDepth } from '../src/utils/Array/dropRepeatDepth';

const arr = [1, 2, 2, { a: 1 }, { a: 1 }, [1], [1]];

test('------dropRepeatDepth测试结果------', () => {
  expect(dropRepeatDepth(arr)).toStrictEqual([1, 2, { a: 1 }, [1]]);
});
