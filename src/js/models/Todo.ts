export default class Todo {
  title: string;
  completed: boolean;

  constructor({title, completed}: {title: string, completed: boolean}) {
    this.title = title;
    this.completed = completed;
  }
}