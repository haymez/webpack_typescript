import './styles';

import * as m from 'mithril';
import { saveTodo } from 'actions';
import Subscription from 'utils/Subscription';
import Todo from 'models/Todo';
import TodoStore from 'stores/TodoStore';
import Button from 'components/Button';
import todo from 'components/todo';
import Input from '../Input';

export default class implements m.ClassComponent {
  sub: Subscription;
  value: string;

  addTodo() {
    saveTodo.emit(
      new Todo({
        title: this.value,
      })
    );
    this.value = '';
  }

  oninit() {
    this.sub = TodoStore.subscribe(m.redraw);
    this.value = '';
  }
  onremove() {
    this.sub.cancel();
  }

  view() {
    return m('.components-home', [
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
            m('.form-elements', [
              m(Input, {
                type: 'text',
                placeholder: 'Todo Title',
                value: this.value,
                oninput: (e: any) => (this.value = e.target.value),
              }),
              m(
                Button,
                {
                  type: 'submit',
                },
                'Add Todo'
              ),
            ]),
          ]
        ),
        m(
          '.todo-list',
          TodoStore.all().map(todoObj => {
            return m(todo, {
              key: todoObj.title,
              checked: todoObj.completed,
              onclick: () => {
                saveTodo.emit(
                  todoObj.update({ completed: !todoObj.completed })
                );
              },
              title: todoObj.title,
            });
          })
        ),
      ]),
    ]);
  }
}
