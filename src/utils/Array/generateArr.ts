export const generateArr = <T extends string | number>(length: number, ele: T): T[] => {
  return Array(length).fill(ele);
};
