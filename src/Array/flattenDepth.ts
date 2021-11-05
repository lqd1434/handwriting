export const flattenDepth = (arr: any[], depth: number = 1) => {
  const newArr: any[] = [];
  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (const item of arr) {
      if (Array.isArray(item) && depth > 0) {
        depth--;
        newArr.push(...flattenDepth(item, depth));
      } else {
        newArr.push(item);
      }
    }
  }
  return newArr;
};
