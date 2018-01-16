interface TodoSignature {
  id?: number;
  title?: string;
  completed?: boolean;
}

export default class Todo {
  id: number;
  title: string;
  completed: boolean;

  constructor({ id, title, completed }: TodoSignature) {
    this.id = id || -1;
    this.title = title || '';
    this.completed = completed || false;
    Object.freeze(this);
  }

  update(attrs: TodoSignature) {
    return new Todo(Object.assign({}, this, attrs));
  }
}
