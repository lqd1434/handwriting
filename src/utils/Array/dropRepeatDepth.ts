import { findIndex } from './findIndex';

export const dropRepeatDepth = (arr: any[]) => {
  return arr.filter((item, index) => {
    let flag;
    if (typeof item === 'object') {
      flag = findIndex(arr, item) === index;
    } else {
      flag = arr.indexOf(item, 0) === index;
    }
    return flag;
  });
};
