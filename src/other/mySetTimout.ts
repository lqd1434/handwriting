export function mySetTimout(func: Function, delay: number) {
  let timer;

  const interval = () => {
    func();
    timer = setTimeout(interval, delay);
  };

  setTimeout(interval, delay);
  return timer;
}
