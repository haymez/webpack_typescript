import Todo from './Todo';

test('Todo works as expected', () => {
  const todo = new Todo({ title: 'Title' });

  expect(todo.id).toBe(-1);
  expect(todo.completed).toBe(false);
  expect(todo.title).toBe('Title');
});

test('Todo object is immutable', () => {
  const todo = new Todo({ title: 'Title' });
  const updated = todo.update({ completed: true });

  expect(todo.completed).toBe(false);
  expect(updated.completed).toBe(true);
  expect(updated.title).toBe('Title');
});
