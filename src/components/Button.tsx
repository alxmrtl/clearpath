/**
 * Button Component
 *
 * A beautiful, tactile button with smooth animations.
 * Designed to feel responsive and delightful to press.
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  style,
}) => {
  const isDisabled = disabled || loading;

  // Gradient backgrounds for primary button
  const renderContent = () => {
    if (variant === 'primary' && !isDisabled) {
      return (
        <LinearGradient
          colors={theme.colors.gradients.primary}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.button,
            styles[size],
            fullWidth && styles.fullWidth,
            isDisabled && styles.disabled,
          ]}
        >
          {loading ? (
            <ActivityIndicator color={theme.colors.neutral[0]} />
          ) : (
            <>
              {icon && <>{icon}</>}
              <Text style={[styles.text, styles[`${variant}Text`], styles[`${size}Text`]]}>
                {children}
              </Text>
            </>
          )}
        </LinearGradient>
      );
    }

    return (
      <>
        {loading ? (
          <ActivityIndicator
            color={
              variant === 'primary'
                ? theme.colors.neutral[0]
                : theme.colors.primary[500]
            }
          />
        ) : (
          <>
            {icon && <>{icon}</>}
            <Text style={[styles.text, styles[`${variant}Text`], styles[`${size}Text`]]}>
              {children}
            </Text>
          </>
        )}
      </>
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.7}
      style={[
        variant !== 'primary' && styles.button,
        variant !== 'primary' && styles[variant],
        variant !== 'primary' && styles[size],
        fullWidth && styles.fullWidth,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.lg,
    gap: theme.spacing[2],
    ...theme.shadows.sm,
  },

  // Sizes
  small: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[2],
  },
  medium: {
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[3.5],
  },
  large: {
    paddingHorizontal: theme.spacing[8],
    paddingVertical: theme.spacing[5],
  },

  // Variants
  primary: {
    backgroundColor: theme.colors.primary[500],
  },
  secondary: {
    backgroundColor: theme.colors.secondary[500],
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: theme.colors.primary[500],
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: theme.colors.error.main,
  },

  // States
  disabled: {
    opacity: 0.5,
  },

  fullWidth: {
    width: '100%',
  },

  // Text styles
  text: {
    ...theme.textStyles.button,
    textAlign: 'center',
  },
  primaryText: {
    color: theme.colors.neutral[0],
  },
  secondaryText: {
    color: theme.colors.neutral[0],
  },
  outlineText: {
    color: theme.colors.primary[500],
  },
  ghostText: {
    color: theme.colors.primary[500],
  },
  dangerText: {
    color: theme.colors.neutral[0],
  },

  smallText: {
    ...theme.textStyles.buttonSmall,
  },
  mediumText: {
    ...theme.textStyles.button,
  },
  largeText: {
    ...theme.textStyles.buttonLarge,
  },
});
