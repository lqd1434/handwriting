import { dropRepeatDepth } from './dropRepeatDepth';

export const combineSole = (arr1: any[], arr2: any[]) => {
  return dropRepeatDepth([...arr1, ...arr2]);
};
