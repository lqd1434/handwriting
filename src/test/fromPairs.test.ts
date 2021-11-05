import { fromPairs } from '../utils/Array/fromPairs';

console.warn('------fromPairs测试结果------');

const arr = [
  ['a', 1],
  ['b', 2]
];

const res = fromPairs(arr);

console.log(res); // =>{a: 1, b: 2}
