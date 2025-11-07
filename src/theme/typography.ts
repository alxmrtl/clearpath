/**
 * ClearPath Design System - Typography
 *
 * Beautiful, readable typography that feels warm and approachable.
 * Every text style serves clarity and emotional comfort.
 */

export const typography = {
  // Font Families
  fonts: {
    // Use system fonts for optimal performance and native feel
    primary: {
      light: 'System',
      regular: 'System',
      medium: 'System',
      semibold: 'System',
      bold: 'System',
    },
    // For numbers and data (tabular)
    mono: 'Courier New',
  },

  // Font Sizes (using a modular scale - 1.25 ratio)
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
    '4xl': 32,
    '5xl': 40,
    '6xl': 48,
    '7xl': 56,
    '8xl': 64,
  },

  // Line Heights
  lineHeights: {
    tight: 1.2,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: -0.8,
    tight: -0.4,
    normal: 0,
    wide: 0.4,
    wider: 0.8,
    widest: 1.6,
  },

  // Font Weights
  weights: {
    light: '300' as const,
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

/**
 * Pre-defined text styles for common use cases
 */
export const textStyles = {
  // Headings
  h1: {
    fontSize: typography.sizes['5xl'],
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h2: {
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h3: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.snug,
  },
  h4: {
    fontSize: typography.sizes['2xl'],
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.snug,
  },
  h5: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.normal,
  },
  h6: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.normal,
  },

  // Body Text
  bodyLarge: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.regular,
    lineHeight: typography.lineHeights.relaxed,
  },
  body: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.regular,
    lineHeight: typography.lineHeights.normal,
  },
  bodySmall: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.regular,
    lineHeight: typography.lineHeights.normal,
  },

  // UI Elements
  button: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.tight,
    letterSpacing: typography.letterSpacing.wide,
  },
  buttonLarge: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.semibold,
    lineHeight: typography.lineHeights.tight,
    letterSpacing: typography.letterSpacing.wide,
  },
  buttonSmall: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    lineHeight: typography.lineHeights.tight,
  },

  // Labels & Captions
  label: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    lineHeight: typography.lineHeights.normal,
    letterSpacing: typography.letterSpacing.wide,
  },
  caption: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.regular,
    lineHeight: typography.lineHeights.normal,
  },

  // Data Display
  number: {
    fontSize: typography.sizes['4xl'],
    fontWeight: typography.weights.bold,
    lineHeight: typography.lineHeights.tight,
    fontFamily: typography.fonts.mono,
  },
  statLabel: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.medium,
    lineHeight: typography.lineHeights.normal,
    letterSpacing: typography.letterSpacing.wider,
    textTransform: 'uppercase' as const,
  },

  // Special
  quote: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.regular,
    lineHeight: typography.lineHeights.relaxed,
    fontStyle: 'italic' as const,
  },
};
