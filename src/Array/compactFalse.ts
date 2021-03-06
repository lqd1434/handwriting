import { judgmentType, TypeEnums } from '../utils/judgment';
import { deepEqual } from '../Object/deepEqual';

export const compactFalse = (arr: any[]) => {
  return arr.filter((item) => {
    if (judgmentType(item) === TypeEnums.Arr && (item as Array<any>).length === 0) {
      return false;
    } else if (judgmentType(item) === TypeEnums.Obj && deepEqual(item as Object, {})) {
      return false;
    }
    return item;
  });
};
