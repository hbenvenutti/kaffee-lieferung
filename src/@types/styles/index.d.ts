import 'styled-components';

import type { defaultTheme } from '../../styles/themes/default-theme';

// ---------------------------------------------------------------------------------------------- //

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export type DefaultTheme = ThemeType;
}
