// 这个是用来获取当前时间戳的
function now() {
  return +new Date();
}
/**
 * 防抖函数，返回函数连续调用时，空闲时间必须大于或等于 wait，func 才会执行
 *
 * @param  {function} func        回调函数
 * @param  {number}   wait        表示时间窗口的间隔
 * @param  {boolean}  immediate   设置为ture时，是否立即调用函数
 * @return {function}             返回客户调用函数
 */
export function debounce(func: Function, wait: number = 50, immediate: boolean = true) {
  let timer;
  const later = (...params) =>
    setTimeout(() => {
      timer = null;
      if (!immediate) {
        func(...params);
      }
    }, wait);

  return function (...params) {
    if (!timer) {
      //如果是第一次点击立即执行
      if (immediate) {
        func(...params);
      }
    } else {
      clearTimeout(timer);
    }
    timer = later(...params);
  };
}
