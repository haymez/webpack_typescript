class Todo {
  title: string;
  completed: boolean;
}

class Store {
  private _data: Array<Todo> = [];

  getData(): ReadonlyArray<Todo> {
    return Object.freeze([...this._data]);
  }
}

export default new Store();