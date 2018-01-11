export default class Subscription {
  private callback: Function;

  constructor(callback: Function) {
    this.callback = callback;
  }

  cancel() {
    this.callback();
  }
}
