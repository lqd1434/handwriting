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
    executor(this.resolve, this.reject);
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
    if (this.state === Status.PENDING) {
      this.onFulfilledFunc.push(() => onFulfilled(this.fulfilledValue));
      this.onRejectedFunc.push(() => onRejected(this.reason));
    }
    if (this.state === Status.FULFILLED) {
      onFulfilled(this.fulfilledValue);
    }

    if (this.state === Status.REJECTED) {
      onRejected(this.reason);
    }
  }
}
