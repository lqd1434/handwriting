import { concat } from '../utils/Array/concat';

console.warn('------concat测试结果------');

const res = concat([1], 3, [2, 4], { a: 1 });

console.log(res);

console.warn('------系统内置concat------');

console.log([1].concat(1, 2, [3]));
