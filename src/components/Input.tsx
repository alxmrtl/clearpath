/**
 * Input Component
 *
 * Beautiful, accessible text input with smooth focus transitions.
 * Makes data entry feel effortless and pleasant.
 */

import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ViewStyle,
  TextInputProps,
} from 'react-native';
import { Label, Caption } from './Typography';
import { theme } from '../theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helper?: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helper,
  containerStyle,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Label style={styles.label}>{label}</Label>}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
          error && styles.inputContainerError,
        ]}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor={theme.colors.neutral[400]}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...inputProps}
        />
      </View>
      {error && <Caption color={theme.colors.error.main}>{error}</Caption>}
      {helper && !error && <Caption>{helper}</Caption>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    marginBottom: theme.spacing[2],
  },
  inputContainer: {
    backgroundColor: theme.colors.neutral[50],
    borderRadius: theme.borderRadius.lg,
    borderWidth: 2,
    borderColor: theme.colors.neutral[200],
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    transition: 'all 0.2s ease',
  },
  inputContainerFocused: {
    borderColor: theme.colors.primary[500],
    backgroundColor: theme.colors.neutral[0],
    ...theme.shadows.sm,
  },
  inputContainerError: {
    borderColor: theme.colors.error.main,
  },
  input: {
    ...theme.textStyles.body,
    color: theme.colors.neutral[900],
    padding: 0,
  },
});
