import { colors, darkColors } from './colors';
import { spacing, borderRadius } from './spacing';
import { typography } from './typography';

export interface Theme {
  colors: typeof colors;
  spacing: typeof spacing;
  borderRadius: typeof borderRadius;
  typography: typeof typography;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors,
  spacing,
  borderRadius,
  typography,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  borderRadius,
  typography,
  isDark: true,
};

export { colors, darkColors, spacing, borderRadius, typography };
