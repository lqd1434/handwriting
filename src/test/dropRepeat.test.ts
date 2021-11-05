import { dropRepeat } from '../utils/Array/dropRepeat';

console.warn('------dropRepeat测试结果------');
const arr = [1, 2, 2, 3, 3, 4];
const res = dropRepeat(arr);
console.log(res); // => [1,2,3,4]
