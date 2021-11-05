import { flattenDepth } from '../utils/Array/flattenDepth';

console.warn('------flattenDepth测试结果------');

const arr = [1, [2, 3, [4, [5]]], 9];

const res = flattenDepth(arr, 2);
console.log(res); // =>[1, 2, 3, 4, [5], 9]
