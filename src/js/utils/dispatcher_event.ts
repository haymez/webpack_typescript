import Subscription from 'utils/subscription';

export default class DispatcherEvent {
  private _callbacks: Array<Function> = [];

  subscribe(callback: Function): Subscription {
    this._callbacks.push(callback);

    return new Subscription(() => {
      let idx = this._callbacks.indexOf(callback);
      this._callbacks.splice(idx, 1);
    });
  }

  emit(...args): void {
    this._callbacks.forEach(callback => {
      let hasArgs: boolean = args.length > 0;

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
