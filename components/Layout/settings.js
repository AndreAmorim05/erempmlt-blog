import { themes } from '../../theme/initThemes'
import Layout1Settings from './Layout1/Layout1Settings'

export const LayoutSettings = {
  activeLayout: 'layout1',
  activeTheme: 'purpleDark2',
  perfecScrollbar: false,

  themes,
  Layout1Settings,

  secondarySidebar: {
    show: true,
    open: false,
    theme: 'slateDark1',
  },

  footer: {
    show: true,
    fixed: false,
    theme: 'slateDark1',
  },
}
