export function compose(...funcs: Function[]) {
  return (a: number) => {
    for (const func of funcs) {
      a = func(a);
    }
    return a;
  };
}
