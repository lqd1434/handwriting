export function myNew(fn, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, fn.prototype);
  fn.apply(obj, args);
  return obj;
}
