import 'css/components/home';

import 'css/base';
import * as m from 'mithril';
import { saveTodo } from 'actions';
import TodoStore from 'stores/TodoStore';
import Todo from 'models/Todo';

export default {
  oninit() {
    this.sub = TodoStore.subscribe(m.redraw);
    this.value = '';

    this.addTodo = () => {
      saveTodo.emit(
        new Todo({
          title: this.value,
        })
      );
      this.value = '';
    };
  },
  onremove() {
    this.sub.cancel();
  },
  view() {
    return m('.home-page', [
      m('.todos', [
        m(
          'form',
          {
            onsubmit: () => {
              this.addTodo();
              return false;
            },
          },
          [
            m('h1', 'Todos'),
            m('input', {
              type: 'text',
              placeholder: 'Todo Title',
              value: this.value,
              oninput: e => (this.value = e.target.value),
            }),
            m(
              'button',
              {
                type: 'submit',
              },
              'Add Todo'
            ),
          ]
        ),
        m(
          'ul',
          TodoStore.all().map((todo, index) => {
            return m('li', { key: todo.title }, [
              m('label', [
                m('input', {
                  type: 'checkbox',
                  checked: todo.completed,
                  onchange: e => {
                    let todo = TodoStore.all()[index];
                    console.log(todo);
                    saveTodo.emit(todo.update({ completed: e.target.checked }));
                  },
                }),
                todo.title,
              ]),
            ]);
          })
        ),
      ]),
    ]);
  },
};
