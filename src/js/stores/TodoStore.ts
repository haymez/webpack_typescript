import { Todo } from 'models';
import { DispatcherEvent, Subscription } from 'utils';
import { addTodo, updateTodo } from 'actions';
import { create, update } from 'services/todo';

class TodoStore {
  private _data: Array<Todo> = [];
  private _change: DispatcherEvent = new DispatcherEvent();

  constructor() {
    addTodo.subscribe(async ({ title }) => {
      this._data.push(
        await create(new Todo({ title: title, completed: false }))
      );
      this._change.emit();
    });

    updateTodo.subscribe(async (index, attrs = {}) => {
      this._data[index] = await update(Object.assign(this._data[index], attrs));
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
