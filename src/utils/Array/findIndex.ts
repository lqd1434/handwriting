import { deepEqual } from '../Object/isEqual';

export const findIndex = (arr: any[], ele: Object) => {
  if (typeof ele !== 'object' || !Array.isArray(arr)) return;
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    const res = deepEqual(arr[i], ele);
    if (res) {
      index = i;
      break;
    }
  }
  return index;
};
