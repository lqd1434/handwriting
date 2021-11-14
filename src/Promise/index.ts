export const Status = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected'
};

type Func = (data: any) => void;
type ExecutorType = (resolve: Func, reject: Func) => void;
export class MyPromise {
  state: string | 'pending' | 'fulfilled' | 'rejected' = 'pending';
  fulfilledValue: any = '';
  reason: any = '';
  onFulfilledFunc: any[] = [];
  onRejectedFunc: any[] = [];

  constructor(executor: ExecutorType) {
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      this.reject(e);
    }
  }

  resolve = (value: any) => {
    if (this.state === Status.PENDING) {
      this.fulfilledValue = value;
      this.state = Status.FULFILLED;
      this.onFulfilledFunc.forEach((func) => {
        func();
      });
    }
  };

  reject = (reason: any) => {
    if (this.state === Status.PENDING) {
      this.reason = reason;
      this.state = Status.REJECTED;
      this.onRejectedFunc.forEach((func) => {
        func();
      });
    }
  };

  then(onFulfilled, onRejected?) {
    return new MyPromise((resolve, reject) => {
      switch (this.state) {
        case Status.FULFILLED:
          try {
            //.then若返回一个值接收等到下一个.then处理
            let res = onFulfilled(this.fulfilledValue);
            resolve(res);
          } catch (e) {
            reject(e);
          }
          break;
        case Status.REJECTED:
          try {
            let x = onRejected(this.reason);
            //.then若返回一个值接收等到下一个.then处理
            resolve(x);
          } catch (e) {
            reject(e);
          }
          break;
        default:
          this.onFulfilledFunc.push(() => {
            try {
              let x = onFulfilled(this.fulfilledValue);
              resolve(x);
            } catch (e) {
              reject(e);
            }
          });
          this.onRejectedFunc.push(() => {
            try {
              let x = onRejected(this.reason);
              resolve(x);
            } catch (e) {
              reject(e);
            }
          });
      }
    });
  }
}
