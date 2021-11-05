/**
 * 排除arr中包含在exclude中的数组元素
 * @param arr
 * @param excludeArr
 */
export const difference = (arr: any[], excludeArr: any[]) => {
  return arr.filter((item) => {
    let flag = true;
    for (let i = 0; i < excludeArr.length; i++) {
      if (item === excludeArr[i]) {
        flag = false;
      }
    }
    return flag;
  });
};
