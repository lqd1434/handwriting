import { Judgment, judgmentType, TypeEnums } from '../utils/judgment';

/**
 * 深拷贝
 * @param sourceObj
 */
export const deepClone = (sourceObj: any) => {
  if (!sourceObj) return sourceObj;
  if (!(typeof sourceObj === 'object')) return sourceObj;
  const objType = Object.prototype.toString.call(sourceObj);
  const targetObj: Object | Array<any> = objType === '[object Object]' ? {} : [];

  for (let key in sourceObj) {
    if (sourceObj.hasOwnProperty(key)) {
      if (!(key in targetObj)) {
        //日期对象
        const type = judgmentType(sourceObj[key]);
        if (Judgment.isPrimitive(sourceObj[key])) {
          targetObj[key] = sourceObj[key];
        } else {
          switch (type) {
            case TypeEnums.Date:
              targetObj[key] = new Date((sourceObj[key] as Date).getTime());
              break;
            case TypeEnums.RegExp:
              targetObj[key] = new RegExp(sourceObj[key] as RegExp);
              break;
            case TypeEnums.Ele:
              let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
              targetObj[key] = domEle.cloneNode(true);
              break;
            case TypeEnums.Set:
              targetObj[key] = new Set([...sourceObj[key]]);
              break;
            case TypeEnums.Map:
              let tempMap = new Map();
              for (const value of sourceObj[key]) {
                tempMap.set(value[0], value[1]);
              }
              targetObj[key] = tempMap;
              break;
            case TypeEnums.Obj:
              targetObj[key] = deepClone(sourceObj[key]);
              break;
            case TypeEnums.Arr:
              targetObj[key] = deepClone(sourceObj[key]);
              break;
          }
        }
        // if (Judgment.isDate(sourceObj[key])) {
        //   targetObj[key] = new Date((sourceObj[key] as Date).getTime());
        // } else if (Judgment.isRegExp(sourceObj[key])) {
        //   //正则对象
        //   targetObj[key] = new RegExp(sourceObj[key] as RegExp);
        // } else if (typeof sourceObj[key] === 'object' && (sourceObj[key] as HTMLElement).nodeType === 1) {
        //   let domEle = document.getElementsByTagName(sourceObj[key].nodeName)[0];
        //   targetObj[key] = domEle.cloneNode(true);
        // } else if (Judgment.isSet(sourceObj[key])) {
        //   targetObj[key] = new Set([...sourceObj[key]]);
        // } else {
        //   // console.log('判断出object');
        //   if (typeof sourceObj[key] === 'object') {
        //     //若为对象再次递归调用
        //     targetObj[key] = deepClone(sourceObj[key]);
        //   } else {
        //     //不为对象直接拷贝
        //     targetObj[key] = sourceObj[key];
        //   }
        // }
      }
    }
  }
  return targetObj;
};
