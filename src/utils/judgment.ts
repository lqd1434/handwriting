export enum TypeEnums {
  Num = 'number',
  Str = 'string',
  Bool = 'boolean',
  Func = 'function',
  Sym = 'symbol',
  Uni = 'undefined',
  Obj = 'object',
  Arr = 'array',
  Null = 'null',
  Ele = 'HTMLElement',
  RegExp = 'regexp',
  Date = 'date',
  Set = 'set',
  Map = 'map',
  WeakMap = 'weakmap',
  WeakSet = 'weakset'
}

const PrimitiveTypes = [
  TypeEnums.Num,
  TypeEnums.Str,
  TypeEnums.Sym,
  TypeEnums.Bool,
  TypeEnums.Uni,
  TypeEnums.Null
];

export function judgmentType(targetType: any) {
  //可分辨 number|string|function|symbol|undefined
  if (!(typeof targetType === 'object')) return typeof targetType as TypeEnums;
  //判断object具体类型
  let type: string;
  type = Object.prototype.toString.call(targetType).slice(8, -1).toLowerCase();
  if (targetType?.nodeType === 1) {
    type = 'HTMLElement';
  }
  return type as TypeEnums;
}

export class Judgment {
  static isPrimitive = (source: any) => {
    return PrimitiveTypes.includes(judgmentType(source) as TypeEnums);
  };

  static isObj = (source: any) => {
    return typeof source === 'object';
  };

  static isEle = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.Ele;
  };

  static isRegExp = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.RegExp;
  };

  static isDate = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.Date;
  };

  static isSet = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.Set;
  };

  static isMap = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.Map;
  };

  static isWeakMap = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.WeakMap;
  };
  static isWeakSet = (source: any) => {
    return (judgmentType(source) as TypeEnums) === TypeEnums.WeakSet;
  };
}
