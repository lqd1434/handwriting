export function myInstanceOf(obj1: Function, obj2: Object) {
  const obj1Proto = obj1.prototype;
  let obj2Proto = Object.getPrototypeOf(obj2);

  while (obj2Proto) {
    if (obj2Proto === obj1Proto) {
      return true;
    }
    obj2Proto = Object.getPrototypeOf(obj2Proto);
  }
  return false;
}
