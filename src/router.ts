import * as m from 'mithril';
import home from 'components/home';

const app = document.querySelector('#app');
if (app !== null) {
  m.route(app, '/', {
    '/': home,
  });
}
