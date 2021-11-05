export const deepEqual = (obj1: Object, obj2: Object) => {
  let flag = false;
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) {
    return true;
  }
  for (let key in obj1) {
    if (key in obj2) {
      if (typeof obj1[key] === 'object') {
        flag = deepEqual(obj1[key], obj2[key]);
      } else {
        flag = obj1[key] === obj2[key];
      }
    } else {
      flag = false;
    }
    //如果不相等立刻返回,避免不必要的比较以及覆盖原值,造成判断错误
    if (!flag) {
      break;
    }
  }
  return flag;
};
