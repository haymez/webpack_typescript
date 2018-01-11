import { Todo } from 'models';
import { DispatcherEvent, Subscription } from 'utils';
import { addTodo, updateTodo } from 'actions';

class TodoStore {
  private _data: Array<Todo> = [];
  private _change: DispatcherEvent = new DispatcherEvent();

  constructor() {
    addTodo.subscribe(({ title }) => {
      this._data.push(new Todo(title, false));
      this._change.emit();
    });

    updateTodo.subscribe((index, attrs = {}) => {
      this._data[index] = Object.assign(this._data[index], attrs);
      this._change.emit();
    });
  }

  all(): ReadonlyArray<Todo> {
    return Object.freeze([...this._data]);
  }

  subscribe(callback: Function): Subscription {
    return this._change.subscribe(callback);
  }
}

export default new TodoStore();
