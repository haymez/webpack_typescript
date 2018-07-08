import './styles'

import * as m from 'mithril';

export default class Input implements m.ClassComponent<any> {
  view(vnode: m.CVnode<any>) {
    return m('input.input', vnode.attrs);
  }
}