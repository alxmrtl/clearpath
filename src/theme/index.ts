/**
 * ClearPath Design System
 *
 * A beautiful, cohesive design system that supports healing and growth.
 * Every design decision serves the user's emotional and psychological journey.
 */

export * from './colors';
export * from './typography';
export * from './spacing';

import { colors } from './colors';
import { typography, textStyles } from './typography';
import { spacing, borderRadius, shadows, zIndex } from './spacing';

/**
 * Complete theme object
 */
export const theme = {
  colors,
  typography,
  textStyles,
  spacing,
  borderRadius,
  shadows,
  zIndex,

  // Animation timings (natural, organic feel)
  animation: {
    fast: 150,
    base: 250,
    slow: 400,
    slower: 600,
  },

  // Breakpoints (for responsive design)
  breakpoints: {
    sm: 380,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
};

export type Theme = typeof theme;
