/**
 * Card Component
 *
 * Beautiful container for content with subtle shadows and perfect padding.
 * Creates visual hierarchy and breathing room.
 */

import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { theme } from '../theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'elevated' | 'outlined' | 'flat';
  padding?: keyof typeof theme.spacing;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 5,
  style,
}) => {
  return (
    <View
      style={[
        styles.card,
        styles[variant],
        { padding: theme.spacing[padding] },
        style,
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: theme.borderRadius.xl,
    backgroundColor: theme.colors.neutral[0],
  },

  elevated: {
    ...theme.shadows.md,
  },

  outlined: {
    borderWidth: 1,
    borderColor: theme.colors.neutral[200],
    ...theme.shadows.none,
  },

  flat: {
    backgroundColor: theme.colors.neutral[50],
    ...theme.shadows.none,
  },
});
