import { chunk } from '../utils/Array/chunk';

console.warn('------chunk测试结果------');

const arr = [1, 2, 3, 4, 5, 6, 7];
const res = chunk(arr, 3);
console.log(res);
