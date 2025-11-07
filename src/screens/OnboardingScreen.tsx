/**
 * Onboarding Screen
 *
 * A warm, thoughtful journey setup experience.
 * Each question feels purposeful. Each interaction feels caring.
 */

import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import { H2, H4, Body, Button, Card } from '../components';
import { theme } from '../theme';

interface OnboardingScreenProps {
  onComplete: (data: OnboardingData) => void;
}

export interface OnboardingData {
  usageFrequency: string;
  motivations: string[];
  journeyType: string;
}

const STEPS = [
  {
    id: 'usage',
    title: 'Tell us about your current use',
    subtitle: 'This helps us personalize your journey',
  },
  {
    id: 'motivation',
    title: 'What brings you here?',
    subtitle: 'Select all that resonate with you',
  },
  {
    id: 'journey',
    title: 'Choose your path',
    subtitle: 'You can change this anytime',
  },
];

const USAGE_OPTIONS = [
  { value: 'occasional', label: 'Occasionally', description: 'A few times a month' },
  { value: 'weekly', label: 'Weekly', description: '1-3 times per week' },
  { value: 'daily', label: 'Daily', description: 'Once or more per day' },
  { value: 'multiple', label: 'Multiple times daily', description: 'Throughout the day' },
];

const MOTIVATIONS = [
  { value: 'health', label: 'Physical health', icon: '💪' },
  { value: 'clarity', label: 'Mental clarity', icon: '🧠' },
  { value: 'money', label: 'Save money', icon: '💰' },
  { value: 'relationships', label: 'Relationships', icon: '❤️' },
  { value: 'productivity', label: 'Productivity', icon: '⚡' },
  { value: 'dependency', label: 'Break dependency', icon: '🔓' },
];

const JOURNEY_TYPES = [
  {
    value: 'cold_turkey',
    label: 'Cold Turkey',
    description: 'Stop completely, starting now',
    icon: '🎯',
  },
  {
    value: 'gradual',
    label: 'Gradual Reduction',
    description: 'Step down over time',
    icon: '📉',
  },
  {
    value: 'tolerance_break',
    label: 'Tolerance Break',
    description: 'Temporary pause to reset',
    icon: '⏸️',
  },
  {
    value: 'harm_reduction',
    label: 'Harm Reduction',
    description: 'Reduce and optimize use',
    icon: '⚖️',
  },
];

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [usageFrequency, setUsageFrequency] = useState('');
  const [motivations, setMotivations] = useState<string[]>([]);
  const [journeyType, setJourneyType] = useState('');

  const slideAnim = new Animated.Value(0);

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setCurrentStep(currentStep + 1);
        slideAnim.setValue(0);
      });
    } else {
      onComplete({ usageFrequency, motivations, journeyType });
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const canProceed = () => {
    if (currentStep === 0) return usageFrequency !== '';
    if (currentStep === 1) return motivations.length > 0;
    if (currentStep === 2) return journeyType !== '';
    return false;
  };

  const toggleMotivation = (value: string) => {
    if (motivations.includes(value)) {
      setMotivations(motivations.filter((m) => m !== value));
    } else {
      setMotivations([...motivations, value]);
    }
  };

  const renderStepContent = () => {
    const step = STEPS[currentStep];

    if (step.id === 'usage') {
      return (
        <View style={styles.optionsContainer}>
          {USAGE_OPTIONS.map((option) => (
            <Card
              key={option.value}
              style={[
                styles.optionCard,
                usageFrequency === option.value && styles.selectedCard,
              ]}
              variant={usageFrequency === option.value ? 'elevated' : 'outlined'}
            >
              <Button
                onPress={() => setUsageFrequency(option.value)}
                variant="ghost"
                style={styles.optionButton}
              >
                <View style={styles.optionContent}>
                  <H4>{option.label}</H4>
                  <Body color={theme.colors.neutral[600]}>{option.description}</Body>
                </View>
              </Button>
            </Card>
          ))}
        </View>
      );
    }

    if (step.id === 'motivation') {
      return (
        <View style={styles.motivationsGrid}>
          {MOTIVATIONS.map((motivation) => {
            const isSelected = motivations.includes(motivation.value);
            return (
              <Card
                key={motivation.value}
                style={[styles.motivationCard, isSelected && styles.selectedCard]}
                variant={isSelected ? 'elevated' : 'outlined'}
              >
                <Button
                  onPress={() => toggleMotivation(motivation.value)}
                  variant="ghost"
                  style={styles.motivationButton}
                >
                  <View style={styles.motivationContent}>
                    <Body style={styles.motivationIcon}>{motivation.icon}</Body>
                    <Body align="center">{motivation.label}</Body>
                  </View>
                </Button>
              </Card>
            );
          })}
        </View>
      );
    }

    if (step.id === 'journey') {
      return (
        <View style={styles.optionsContainer}>
          {JOURNEY_TYPES.map((journey) => (
            <Card
              key={journey.value}
              style={[
                styles.journeyCard,
                journeyType === journey.value && styles.selectedCard,
              ]}
              variant={journeyType === journey.value ? 'elevated' : 'outlined'}
            >
              <Button
                onPress={() => setJourneyType(journey.value)}
                variant="ghost"
                style={styles.optionButton}
              >
                <View style={styles.journeyContent}>
                  <Body style={styles.journeyIcon}>{journey.icon}</Body>
                  <View style={styles.journeyText}>
                    <H4>{journey.label}</H4>
                    <Body color={theme.colors.neutral[600]}>{journey.description}</Body>
                  </View>
                </View>
              </Button>
            </Card>
          ))}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
          {STEPS.map((_, index) => (
            <View
              key={index}
              style={[
                styles.progressDot,
                index <= currentStep && styles.progressDotActive,
              ]}
            />
          ))}
        </View>

        <H2 align="center" style={styles.title}>
          {STEPS[currentStep].title}
        </H2>
        <Body align="center" color={theme.colors.neutral[600]} style={styles.subtitle}>
          {STEPS[currentStep].subtitle}
        </Body>
      </View>

      <ScrollView
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        {renderStepContent()}
      </ScrollView>

      <View style={styles.footer}>
        {currentStep > 0 && (
          <Button onPress={handleBack} variant="ghost" style={styles.backButton}>
            Back
          </Button>
        )}
        <Button
          onPress={handleNext}
          disabled={!canProceed()}
          fullWidth={currentStep === 0}
          size="large"
        >
          {currentStep === STEPS.length - 1 ? 'Complete' : 'Continue'}
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[0],
  },
  header: {
    paddingHorizontal: theme.spacing[6],
    paddingTop: theme.spacing[8],
    paddingBottom: theme.spacing[6],
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing[2],
    marginBottom: theme.spacing[6],
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.neutral[300],
  },
  progressDotActive: {
    backgroundColor: theme.colors.primary[500],
    width: 24,
  },
  title: {
    marginBottom: theme.spacing[2],
  },
  subtitle: {
    marginBottom: theme.spacing[4],
  },

  content: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: theme.spacing[6],
    paddingBottom: theme.spacing[6],
  },

  // Options
  optionsContainer: {
    gap: theme.spacing[3],
  },
  optionCard: {
    padding: 0,
  },
  selectedCard: {
    borderColor: theme.colors.primary[500],
    borderWidth: 2,
  },
  optionButton: {
    padding: theme.spacing[5],
  },
  optionContent: {
    gap: theme.spacing[1],
    alignItems: 'flex-start',
  },

  // Motivations Grid
  motivationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing[3],
  },
  motivationCard: {
    flex: 1,
    minWidth: '45%',
    padding: 0,
  },
  motivationButton: {
    padding: theme.spacing[5],
  },
  motivationContent: {
    alignItems: 'center',
    gap: theme.spacing[2],
  },
  motivationIcon: {
    fontSize: 32,
  },

  // Journey Cards
  journeyCard: {
    padding: 0,
  },
  journeyContent: {
    flexDirection: 'row',
    gap: theme.spacing[4],
    alignItems: 'center',
  },
  journeyIcon: {
    fontSize: 32,
  },
  journeyText: {
    flex: 1,
    gap: theme.spacing[1],
    alignItems: 'flex-start',
  },

  // Footer
  footer: {
    flexDirection: 'row',
    gap: theme.spacing[3],
    paddingHorizontal: theme.spacing[6],
    paddingVertical: theme.spacing[6],
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[200],
  },
  backButton: {
    flex: 1,
  },
});
