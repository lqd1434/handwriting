import { MyPromise } from './Promise';
import { debounce } from './utils/debounce';

const buttonEle = document.createElement('button');
buttonEle.innerText = '按钮';
document.body.appendChild(buttonEle);

const callback = debounce((e) => {
  console.log('点击了一下');
}, 2000);

buttonEle.addEventListener('click', callback);
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('1');
  }, 3000);
});

promise
  .then((value) => {
    return value + 'hello';
  })
  .then((value) => {
    console.log(value);
  });
