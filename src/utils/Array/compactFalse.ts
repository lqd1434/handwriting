import { JudgmentType, TypeEnums } from '../extra/judgment';
import { deepEqual } from '../Object/deepEqual';

export const compactFalse = (arr: any[]) => {
  return arr.filter((item) => {
    if (JudgmentType(item) === TypeEnums.Arr && (item as Array<any>).length === 0) {
      return false;
    } else if (JudgmentType(item) === TypeEnums.Obj && deepEqual(item as Object, {})) {
      return false;
    }
    return item;
  });
};
