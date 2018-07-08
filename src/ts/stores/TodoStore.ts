import Todo from 'models/Todo';
import DispatcherEvent from 'utils/DispatcherEvent';
import Subscription from 'utils/Subscription';
import { saveTodo } from 'actions';
import { create, update } from 'services/todo';

class TodoStore {
  private _data: Array<Todo> = [];
  private _change: DispatcherEvent<Todo> = new DispatcherEvent();

  constructor() {
    saveTodo.subscribe(async (todo: Todo) => {
      if (todo.id === -1) {
        this._data.push(await create(todo));
        this._change.emit();
      } else {
        let index = this._data.findIndex(t => t.id === todo.id);
        if (index > -1) {
          this._data[index] = await update(todo);
          this._change.emit();
        }
      }
    });
  }

  all(): ReadonlyArray<Todo> {
    return Object.freeze([...this._data]);
  }

  subscribe(callback: (todo: Todo) => void): Subscription {
    return this._change.subscribe(callback);
  }
}

export default new TodoStore();
