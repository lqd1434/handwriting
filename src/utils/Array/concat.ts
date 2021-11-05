import { JudgmentType, TypeEnums } from '../extra/judgment';

export const concat = (sourceArr: any[], ...values) => {
  const newArr: any[] = [...sourceArr];
  for (const val of values) {
    const type = JudgmentType(val);
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
