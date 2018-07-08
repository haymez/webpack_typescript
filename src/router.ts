import * as m from 'mithril';
import Home from 'components/Home';

const app = document.querySelector('#app');
if (app !== null) {
  m.route(app, '/', {
    '/': Home,
  });
}

if ((<any>module).hot) {
  (<any>module).hot.accept();
}
