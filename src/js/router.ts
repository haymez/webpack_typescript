import * as m from 'mithril';
import store from './store';

m.route(document.querySelector('#app'), '/', {
  '/': {
    view() {
      console.log(store.getData());
      return m('h1', 'test!!');
    },
  },
});
