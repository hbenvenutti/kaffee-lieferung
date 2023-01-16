/* eslint-disable @typescript-eslint/no-empty-interface */

import 'styled-components';

import type { defaultTheme } from '../../styles/themes/default-theme';

// ---------------------------------------------------------------------------------------------- //

type Color = string;

// *** ---- Styled Components override ------------------------------------------------------ *** //

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
