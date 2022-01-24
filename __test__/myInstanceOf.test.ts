import { myInstanceOf } from '../src/other/myInstanceOf';

function Person() {}

const person = new Person();
test('------myInstanceOf测试结果------', () => {
  expect(myInstanceOf(Person, person)).toStrictEqual(true);
  expect(myInstanceOf(Set, new Set())).toStrictEqual(true);
});
