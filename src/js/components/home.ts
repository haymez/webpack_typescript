import 'css/base';
import * as m from 'mithril';
import { addTodo, updateTodo } from 'actions';
import { TodoStore } from 'stores';

export default {
  oninit() {
    this.sub = TodoStore.subscribe(m.redraw);
    this.value = '';

    this.addTodo = () => {
      addTodo.emit({
        title: this.value,
      });
      this.value = '';
    };
  },
  onremove() {
    this.sub.cancel();
  },
  view() {
    return m('div', [
      m('h1', 'Todos'),
      m(
        'form',
        {
          onsubmit: () => {
            this.addTodo();
            return false;
          },
        },
        [
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
                onchange: e =>
                  updateTodo.emit(index, { completed: e.target.checked }),
              }),
              todo.title,
            ]),
          ]);
        })
      ),
    ]);
  },
};
