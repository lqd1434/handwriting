type CompareFunc<T extends any> = (ele1: T, ele2: T) => boolean;

//true 则 ele1 > ele2
export const sort = <T>(arr: any[], compareFunc: CompareFunc<T>) => {
  const len = arr.length;
  if (!Array.isArray(arr)) return;
  //冒泡排序
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const res = compareFunc(arr[j], arr[j + 1]);
      if (res) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};
