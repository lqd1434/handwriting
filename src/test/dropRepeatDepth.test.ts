import { dropRepeatDepth } from '../utils/Array/dropRepeatDepth';

console.warn('------dropRepeatDepth测试结果------');
const arr = [1, 2, 2, { a: 1 }, { a: 1 }, [1], [1]];

const res = dropRepeatDepth(arr);
console.log(res); // => [1,2,{a:1},[1]]
