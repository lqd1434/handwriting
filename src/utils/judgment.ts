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
  Set = 'Date',
  Map = 'Date',
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
  }
  if (type === 'object') {
    if (targetType.nodeType === 1) {
      type = 'HTMLElement';
    } else if (targetType instanceof RegExp) {
      type = 'RegExp';
    } else if (targetType instanceof Date) {
      type = 'Date';
    } else if (targetType instanceof Set) {
      type = 'Set';
    } else if (targetType instanceof Map) {
      type = 'Map';
    } else if (targetType instanceof WeakSet) {
      type = 'WeakSet';
    } else if (targetType instanceof WeakMap) {
      type = 'WeakMap';
    }
  }

  return type;
}

class Judgment {
  static isPrimitive = (source: any) => {
    return PrimitiveTypes.includes(judgmentType(source) as TypeEnums);
  };
}
