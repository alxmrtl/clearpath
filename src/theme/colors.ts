/**
 * ClearPath Design System - Colors
 *
 * Carefully crafted color palette inspired by nature, growth, and healing.
 * Every color choice serves the emotional journey of recovery.
 */

export const colors = {
  // Primary - Growth & Hope (Sage Green)
  primary: {
    50: '#F0F7F4',
    100: '#D9EDE3',
    200: '#B3DBC7',
    300: '#8DC9AB',
    400: '#67B78F',
    500: '#4A9D73',  // Main brand color
    600: '#3C7D5C',
    700: '#2E5E45',
    800: '#1F3E2E',
    900: '#0F1F17',
  },

  // Secondary - Calm & Peace (Sky Blue)
  secondary: {
    50: '#EBF5FA',
    100: '#D6EBF5',
    200: '#AED7EB',
    300: '#85C3E0',
    400: '#5DAFD6',
    500: '#4A8DB3',  // Calming, trustworthy
    600: '#3B718F',
    700: '#2C556B',
    800: '#1E3848',
    900: '#0F1C24',
  },

  // Accent - Energy & Vitality (Warm Coral)
  accent: {
    50: '#FFF3F0',
    100: '#FFE7E0',
    200: '#FFCFC2',
    300: '#FFB7A3',
    400: '#FF9F85',
    500: '#FF8766',  // Warm, energetic
    600: '#CC6C52',
    700: '#99513D',
    800: '#663629',
    900: '#331B14',
  },

  // Neutral - Balance & Clarity
  neutral: {
    0: '#FFFFFF',
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    1000: '#000000',
  },

  // Semantic Colors
  success: {
    light: '#D1FAE5',
    main: '#10B981',
    dark: '#065F46',
  },

  warning: {
    light: '#FEF3C7',
    main: '#F59E0B',
    dark: '#92400E',
  },

  error: {
    light: '#FEE2E2',
    main: '#EF4444',
    dark: '#991B1B',
  },

  info: {
    light: '#DBEAFE',
    main: '#3B82F6',
    dark: '#1E40AF',
  },

  // Special - Growth Visualization
  growth: {
    seed: '#8B7355',      // Brown - beginning
    sprout: '#9DC183',    // Light green - early growth
    sapling: '#4A9D73',   // Primary green - establishing
    tree: '#2E5E45',      // Deep green - strong
    forest: '#1F3E2E',    // Darkest green - thriving
  },

  // Mood Colors (for mood tracking)
  mood: {
    excellent: '#10B981',
    good: '#8DC9AB',
    okay: '#FFB74D',
    difficult: '#FF8766',
    struggling: '#EF4444',
  },

  // Overlay & Effects
  overlay: {
    light: 'rgba(255, 255, 255, 0.9)',
    medium: 'rgba(255, 255, 255, 0.7)',
    dark: 'rgba(0, 0, 0, 0.5)',
    darker: 'rgba(0, 0, 0, 0.7)',
  },

  // Gradients
  gradients: {
    primary: ['#4A9D73', '#3C7D5C'],
    calm: ['#4A8DB3', '#3B718F'],
    sunrise: ['#FF9F85', '#FFB7A3'],
    growth: ['#D9EDE3', '#B3DBC7'],
    depth: ['#1F3E2E', '#0F1F17'],
  },
};

// Shorthand exports for common use
export const { primary, secondary, accent, neutral } = colors;
