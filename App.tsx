/**
 * ClearPath App
 *
 * A beautiful journey toward clarity and freedom.
 * Every pixel crafted with care. Every interaction designed with empathy.
 */

import React, { useState } from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  WelcomeScreen,
  OnboardingScreen,
  OnboardingData,
  EmergencyToolkitScreen,
} from './src/screens';
import { AppNavigator } from './src/navigation/AppNavigator';
import { theme } from './src/theme';

type AppState = 'welcome' | 'onboarding' | 'app';

export default function App() {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [showEmergencyToolkit, setShowEmergencyToolkit] = useState(false);

  const handleGetStarted = () => {
    setAppState('onboarding');
  };

  const handleOnboardingComplete = (data: OnboardingData) => {
    console.log('Onboarding completed with:', data);
    setAppState('app');
  };

  const handleEmergency = () => {
    setShowEmergencyToolkit(true);
  };

  const handleCloseEmergency = () => {
    setShowEmergencyToolkit(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {appState === 'welcome' && <WelcomeScreen onGetStarted={handleGetStarted} />}

      {appState === 'onboarding' && (
        <OnboardingScreen onComplete={handleOnboardingComplete} />
      )}

      {appState === 'app' && <AppNavigator onEmergency={handleEmergency} />}

      {/* Emergency Toolkit Modal */}
      <Modal
        visible={showEmergencyToolkit}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <EmergencyToolkitScreen onClose={handleCloseEmergency} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[0],
  },
});
