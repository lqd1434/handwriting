import { judgmentType } from '../src/utils/judgment';

const num = 1;
const str = '1';
const bol = true;
const symbol = Symbol('1');
const func = function () {};
const uni = undefined;
const nul = null;
const obj = {};
const set = new Set();
const weakSet = new WeakSet();
const map = new Map();
const weakMap = new WeakMap();
const regexp = new RegExp('1');
const date = new Date(100);

test('------judgmentType测试结果------', () => {
  expect(judgmentType(num)).toStrictEqual('number');
  expect(judgmentType(str)).toStrictEqual('string');
  expect(judgmentType(bol)).toStrictEqual('boolean');
  expect(judgmentType(symbol)).toStrictEqual('symbol');
  expect(judgmentType(func)).toStrictEqual('function');
  expect(judgmentType(uni)).toStrictEqual('undefined');
  expect(judgmentType(nul)).toStrictEqual('null');
  expect(judgmentType(obj)).toStrictEqual('object');
  expect(judgmentType(set)).toStrictEqual('set');
  expect(judgmentType(map)).toStrictEqual('map');
  expect(judgmentType(weakSet)).toStrictEqual('weakset');
  expect(judgmentType(weakMap)).toStrictEqual('weakmap');
  expect(judgmentType(regexp)).toStrictEqual('regexp');
  expect(judgmentType(date)).toStrictEqual('date');
});
