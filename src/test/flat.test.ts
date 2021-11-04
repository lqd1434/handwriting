import { flat } from '../utils/Array/flat';

const arr = [1, 2, [3, 4, 5, [6, 7]]];

const res = flat(arr);
console.info('------flat测试结果------');
console.log(res);
console.info('------内置flat------');
console.log(arr.flat(10));
