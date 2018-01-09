import * as m from 'mithril';
import home from 'components/home';

m.route(document.querySelector('#app'), '/', {
  '/': home,
});
