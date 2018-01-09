import Todo from 'models/todo';
import DispatcherEvent from 'utils/dispatcher_event';
import Subscription from 'utils/subscription';
import { addTodo } from 'utils/actions';

class TodoStore {
  private _data: Array<Todo> = [];
  private _change: DispatcherEvent = new DispatcherEvent();

  constructor() {
    addTodo.subscribe(() => {
      console.log('add todo! from store.');
    });
  }

  getData(): ReadonlyArray<Todo> {
    return Object.freeze([...this._data]);
  }

  subscribe(callback: Function): Subscription {
    return this._change.subscribe(callback);
  }
}

export default new TodoStore();
