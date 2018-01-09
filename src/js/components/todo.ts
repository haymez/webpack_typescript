import * as m from 'mithril';

export default {
  view(vnode) {
    return m('li.todo', [
      m('label', [
        m('input', {
          type: 'checkbox',
          checked: vnode.attrs.checked,
          onclick: vnode.attrs.onclick,
        }),
        vnode.attrs.title,
      ]),
    ]);
  },
};
