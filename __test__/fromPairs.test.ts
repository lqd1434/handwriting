import { fromPairs } from '../src/Array/fromPairs';

const arr = [
  ['a', 1],
  ['b', 2]
];

test('------fromPairs测试结果------', () => {
  expect(fromPairs(arr)).toStrictEqual({ a: 1, b: 2 });
});
