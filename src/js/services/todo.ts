import { Todo } from 'models';

export const create = function(todo: Todo): Promise<Todo> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todo);
    }, 250);
  });
};
export const update = create;
