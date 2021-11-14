import { judgmentType, TypeEnums } from '../utils/judgment';

export const concat = (sourceArr: any[], ...values) => {
  const newArr: any[] = [...sourceArr];
  for (const val of values) {
    const type = judgmentType(val);
    if (type === TypeEnums.Arr) {
      for (const item of val) {
        newArr.push(item);
      }
    } else {
      newArr.push(val);
    }
  }
  return newArr;
};
