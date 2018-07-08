import Todo from 'models/Todo';

export const create = function(todo: Todo): Promise<Todo> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todo.update({ id: Math.floor(Math.random() * 1000) }));
    }, 250);
  });
};
export const update = function(todo: Todo): Promise<Todo> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todo);
    }, 250);
  });
};
