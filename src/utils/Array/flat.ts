/**
 * 数组打平函数
 * @param arr
 */
export const flat = (arr: any[]) => {
  const tempList: any[] = [];
  if (!Array.isArray(arr)) {
    tempList.push(arr);
    return tempList;
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (!Array.isArray(arr[i])) {
        tempList.push(arr[i]);
      } else {
        tempList.push(...flat(arr[i]));
      }
    }
  }
  return tempList;
};
