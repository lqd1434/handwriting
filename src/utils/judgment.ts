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
  RegExp = 'RegExp',
  Date = 'Date',
  Set = 'Set',
  Map = 'Map',
  WeakMap = 'WeakMap',
  WeakSet = 'WeakSet'
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
  if (!(typeof targetType === 'object')) return typeof targetType as string;
  let type: string = '';
  const typeString = Object.prototype.toString.call(targetType);
  switch (typeString) {
    case '[object Object]':
      type = 'object';
      break;
    case '[object Array]':
      type = 'array';
      break;
    case '[object Null]':
      type = 'null';
      break;
    case '[object Set]':
      type = 'Set';
      break;
    case '[object Map]':
      type = 'Map';
      break;
    case '[object RegExp]':
      type = 'RegExp';
      break;
    case '[object Date]':
      type = 'Date';
      break;
    case '[object WeakSet]':
      type = 'WeakSet';
      break;
    case '[object WeakMap]':
      type = 'WeakMap';
      break;
  }
  if (targetType.nodeType === 1) {
    type = 'HTMLElement';
  }
  return type;
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
