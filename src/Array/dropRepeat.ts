export const dropRepeat = (arr: any[]) => {
  if (!Array.isArray(arr)) return [];
  return arr.filter((item, index) => {
    return arr.indexOf(item, 0) === index;
  });
};
