import { deepEqual } from '../utils/Object/isEqual';

console.warn('------deepEqual测试结果------');

const obj1 = { name: '1', age: 100, obj: { id: 1 } };
const obj2 = { name: '1', age: 100, obj: { id: 1 } };
const obj3 = { name: '2', age: 100 };
const obj4 = { name: '1', age: 100 };

const res1 = deepEqual(obj1, obj2);
const res2 = deepEqual(obj3, obj4);

console.log(res1);
console.log(res2);
