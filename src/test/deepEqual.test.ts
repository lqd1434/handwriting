import { deepEqual } from '../utils/Object/deepEqual';

const obj1 = { name: '1', age: 100, obj: { id: 1 } };
const obj2 = { name: '1', age: 100, obj: { id: 1 } };
const obj3 = { name: '2', age: 100 };
const obj4 = { name: '1', age: 100 };

test('------deepEqual测试结果------', () => {
  expect(deepEqual(obj1, obj2)).toBe(true);
  expect(deepEqual(obj3, obj4)).toBe(true);
  expect(deepEqual({}, { a: 1 })).toBe(false);
  expect(deepEqual({}, {})).toBe(true);
});
