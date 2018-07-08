import Subscription from 'utils/Subscription';

export default class DispatcherEvent<T> {
  private _callbacks: Array<Function> = [];

  subscribe(callback: (...args: Array<T>) => void): Subscription {
    this._callbacks.push(callback);

    return new Subscription(() => {
      let idx = this._callbacks.indexOf(callback);
      this._callbacks.splice(idx, 1);
    });
  }

  emit(...args: Array<T>): void {
    let hasArgs: boolean = args.length > 0;
    this._callbacks.forEach(callback => {
      setTimeout(() => {
        if (hasArgs) {
          callback(...args);
        } else {
          callback();
        }
      }, 0);
    });
  }
}
