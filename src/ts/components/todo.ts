import * as m from 'mithril';

interface TodoAttrs {
  checked: boolean;
  title: string;
  onclick(): void;
}

export default class implements m.ClassComponent<TodoAttrs> {
  view(vnode: m.Vnode<TodoAttrs>) {
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
  }
};
