/**
 * Typography Components
 *
 * Pre-styled text components that enforce consistency and beauty.
 * Every piece of text should feel intentional and readable.
 */

import React from 'react';
import { Text as RNText, StyleSheet, TextStyle } from 'react-native';
import { theme } from '../theme';

interface TextProps {
  children: React.ReactNode;
  color?: string;
  align?: 'left' | 'center' | 'right';
  style?: TextStyle;
}

export const H1: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.h1, { color, textAlign: align }, style]}>{children}</RNText>
);

export const H2: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.h2, { color, textAlign: align }, style]}>{children}</RNText>
);

export const H3: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.h3, { color, textAlign: align }, style]}>{children}</RNText>
);

export const H4: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.h4, { color, textAlign: align }, style]}>{children}</RNText>
);

export const Body: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.body, { color, textAlign: align }, style]}>{children}</RNText>
);

export const BodyLarge: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.bodyLarge, { color, textAlign: align }, style]}>{children}</RNText>
);

export const BodySmall: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.bodySmall, { color, textAlign: align }, style]}>{children}</RNText>
);

export const Caption: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.caption, { color, textAlign: align }, style]}>{children}</RNText>
);

export const Label: React.FC<TextProps> = ({ children, color, align = 'left', style }) => (
  <RNText style={[styles.label, { color, textAlign: align }, style]}>{children}</RNText>
);

const styles = StyleSheet.create({
  h1: {
    ...theme.textStyles.h1,
    color: theme.colors.neutral[900],
  },
  h2: {
    ...theme.textStyles.h2,
    color: theme.colors.neutral[900],
  },
  h3: {
    ...theme.textStyles.h3,
    color: theme.colors.neutral[900],
  },
  h4: {
    ...theme.textStyles.h4,
    color: theme.colors.neutral[900],
  },
  body: {
    ...theme.textStyles.body,
    color: theme.colors.neutral[800],
  },
  bodyLarge: {
    ...theme.textStyles.bodyLarge,
    color: theme.colors.neutral[800],
  },
  bodySmall: {
    ...theme.textStyles.bodySmall,
    color: theme.colors.neutral[700],
  },
  caption: {
    ...theme.textStyles.caption,
    color: theme.colors.neutral[600],
  },
  label: {
    ...theme.textStyles.label,
    color: theme.colors.neutral[700],
  },
});
