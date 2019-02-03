import './styles';

import * as m from 'mithril';

export default class Button implements m.ClassComponent<any> {
  view(vnode: m.CVnode<any>) {
    return m('button.components-button', vnode.attrs, vnode.children);
  }
}
