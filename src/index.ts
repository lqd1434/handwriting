import { MyPromise } from './Promise';

const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('1');
  }, 3000);
});

promise.then((value) => {
  console.log(value);
});
