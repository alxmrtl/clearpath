/**
 * Welcome Screen
 *
 * The first moment. The first impression. The beginning of a journey.
 * This screen sets the emotional tone: hopeful, warm, understanding.
 */

import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { H1, H3, Body, Button } from '../components';
import { theme } from '../theme';

const { height } = Dimensions.get('window');

interface WelcomeScreenProps {
  onGetStarted: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onGetStarted }) => {
  // Animations
  const fadeAnim = new Animated.Value(0);
  const slideAnim = new Animated.Value(30);
  const seedAnim = new Animated.Value(0);

  useEffect(() => {
    // Orchestrated entrance animation
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.spring(slideAnim, {
          toValue: 0,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(seedAnim, {
        toValue: 1,
        friction: 6,
        tension: 30,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LinearGradient
        colors={['#FFFFFF', theme.colors.primary[50], theme.colors.primary[100]]}
        style={styles.gradient}
      >
        <View style={styles.content}>
          {/* Animated Seed/Sprout Illustration */}
          <Animated.View
            style={[
              styles.illustrationContainer,
              {
                opacity: fadeAnim,
                transform: [
                  {
                    scale: seedAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0.3, 1],
                    }),
                  },
                ],
              },
            ]}
          >
            <View style={styles.seedContainer}>
              {/* Simple, beautiful seed illustration using View */}
              <View style={styles.seed} />
              <Animated.View
                style={[
                  styles.sprout,
                  {
                    opacity: seedAnim,
                    transform: [
                      {
                        translateY: seedAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: [20, 0],
                        }),
                      },
                    ],
                  },
                ]}
              />
            </View>
          </Animated.View>

          {/* Welcome Content */}
          <Animated.View
            style={[
              styles.textContent,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <H1 align="center" style={styles.title}>
              Welcome to ClearPath
            </H1>

            <H3
              align="center"
              color={theme.colors.primary[600]}
              style={styles.subtitle}
            >
              Your journey to clarity begins here
            </H3>

            <Body align="center" style={styles.description}>
              A science-backed companion for cannabis cessation. We understand your
              journey is unique, and we're here to support every step forward.
            </Body>
          </Animated.View>

          {/* Value Props */}
          <Animated.View
            style={[
              styles.features,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            {[
              { icon: '🌱', text: 'Personalized journey' },
              { icon: '🧠', text: 'Evidence-based support' },
              { icon: '🔒', text: 'Private & secure' },
            ].map((feature, index) => (
              <View key={index} style={styles.feature}>
                <Body style={styles.featureIcon}>{feature.icon}</Body>
                <Body color={theme.colors.neutral[700]}>{feature.text}</Body>
              </View>
            ))}
          </Animated.View>

          {/* CTA */}
          <Animated.View
            style={[
              styles.ctaContainer,
              {
                opacity: fadeAnim,
              },
            ]}
          >
            <Button
              onPress={onGetStarted}
              size="large"
              fullWidth
            >
              Begin Your Journey
            </Button>
          </Animated.View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[0],
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: theme.spacing[6],
    paddingTop: height * 0.08,
    paddingBottom: theme.spacing[10],
    justifyContent: 'space-between',
  },

  // Illustration
  illustrationContainer: {
    alignItems: 'center',
    marginTop: theme.spacing[8],
  },
  seedContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  seed: {
    width: 60,
    height: 80,
    backgroundColor: theme.colors.growth.seed,
    borderRadius: 30,
    ...theme.shadows.lg,
  },
  sprout: {
    position: 'absolute',
    top: -20,
    width: 30,
    height: 60,
    backgroundColor: theme.colors.growth.sprout,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },

  // Text Content
  textContent: {
    alignItems: 'center',
    marginTop: theme.spacing[12],
  },
  title: {
    marginBottom: theme.spacing[3],
  },
  subtitle: {
    marginBottom: theme.spacing[6],
  },
  description: {
    lineHeight: 26,
    paddingHorizontal: theme.spacing[4],
  },

  // Features
  features: {
    gap: theme.spacing[4],
    marginTop: theme.spacing[8],
  },
  feature: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  },
  featureIcon: {
    fontSize: 24,
  },

  // CTA
  ctaContainer: {
    marginTop: 'auto',
  },
});
