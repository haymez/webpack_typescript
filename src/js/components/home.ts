import * as m from 'mithril';
// import { addTodo } from 'utils/actions';
import store from 'stores/todo';

export default {
  oninit() {
    this.sub = store.subscribe(m.redraw);
  },
  view() {
    return m('div', [m('h1', 'Todos')]);
  },
};
