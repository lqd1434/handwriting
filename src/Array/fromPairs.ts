export const fromPairs = (arr: Array<any>[]) => {
  const targetObj = {};

  for (const item of arr) {
    if (item.length !== 2) {
      return targetObj;
    } else {
      Object.assign(targetObj, { [item[0]]: item[1] });
    }
  }
  return targetObj;
};
