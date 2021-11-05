import { compactFalse } from '../utils/Array/compactFalse';

console.warn('------compactFalse测试结果------');

const res = compactFalse([1, 0, 2, '', null, undefined, {}, NaN, []]);

console.log(res);
