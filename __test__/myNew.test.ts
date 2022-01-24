const { myNew } = require('../src/other/myNew');

function Test(this: any, ok: string) {
  this.hello = ok;
}

Test.prototype.ok = 'ok';

const obj = myNew(Test, 'jj');
test('------myNew测试结果------', () => {
  console.log(obj);
  console.log(obj.ok);
  expect(obj.hello).toStrictEqual('jj');
});
