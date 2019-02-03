import * as m from 'mithril';

interface TodoAttrs {
  checked: boolean;
  title: string;
  onclick(): void;
}

export default class implements m.ClassComponent<TodoAttrs> {
  view(vnode: m.Vnode<TodoAttrs>) {
    const { checked, onclick, title } = vnode.attrs;

    return m(
      '.todo',
      {
        class: checked ? 'checked' : '',
        onclick: onclick,
      },
      [m('label', [title])]
    );
  }
}
