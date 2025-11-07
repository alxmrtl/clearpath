/**
 * Emergency Toolkit Screen
 *
 * When someone needs help NOW. This screen must be:
 * - Immediately calming
 * - Crystal clear
 * - Non-judgmental
 * - Actionable
 *
 * Lives could change based on this screen's effectiveness.
 */

import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { H2, H4, Body, BodySmall, Card, Button } from '../components';
import { theme } from '../theme';

interface EmergencyToolkitScreenProps {
  onClose: () => void;
}

const BREATHING_DURATION = 16; // 4 seconds in, 4 out

export const EmergencyToolkitScreen: React.FC<EmergencyToolkitScreenProps> = ({
  onClose,
}) => {
  const [urgeSeverity, setUrgeSeverity] = useState<number | null>(null);
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'in' | 'hold' | 'out'>('in');

  const fadeAnim = new Animated.Value(0);
  const pulseAnim = new Animated.Value(1);
  const breathingAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
    }).start();

    // Gentle pulsing animation for breathing circle
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  useEffect(() => {
    if (isBreathing) {
      // Breathing cycle animation
      const breathingCycle = () => {
        // Inhale (4s)
        setBreathingPhase('in');
        Animated.timing(breathingAnim, {
          toValue: 1,
          duration: 4000,
          useNativeDriver: true,
        }).start(() => {
          // Hold (2s)
          setBreathingPhase('hold');
          setTimeout(() => {
            // Exhale (4s)
            setBreathingPhase('out');
            Animated.timing(breathingAnim, {
              toValue: 0,
              duration: 4000,
              useNativeDriver: true,
            }).start(() => {
              // Pause (2s) then repeat
              setTimeout(() => {
                if (isBreathing) breathingCycle();
              }, 2000);
            });
          }, 2000);
        });
      };

      breathingCycle();
    }
  }, [isBreathing]);

  const distractionActivities = [
    { icon: '🚶', title: 'Take a walk', duration: '5-10 min' },
    { icon: '💧', title: 'Drink water', duration: '1 min' },
    { icon: '📞', title: 'Call someone', duration: '5 min' },
    { icon: '🎵', title: 'Listen to music', duration: '5 min' },
    { icon: '💪', title: '10 pushups', duration: '2 min' },
    { icon: '🧊', title: 'Hold ice cube', duration: '1 min' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={[theme.colors.secondary[50], theme.colors.neutral[0]]}
        style={styles.gradient}
      >
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <Animated.View style={{ opacity: fadeAnim }}>
            {/* Calming Header */}
            <View style={styles.header}>
              <H2 align="center" color={theme.colors.secondary[700]}>
                You're Going to Be Okay
              </H2>
              <Body align="center" color={theme.colors.neutral[600]}>
                This craving will pass. Let's ride it out together.
              </Body>
            </View>

            {/* Urge Intensity Tracker */}
            {urgeSeverity === null && (
              <Card style={styles.severityCard}>
                <H4 align="center" style={styles.severityTitle}>
                  How strong is the urge right now?
                </H4>
                <View style={styles.severityButtons}>
                  {[1, 2, 3, 4, 5].map((level) => (
                    <Button
                      key={level}
                      onPress={() => setUrgeSeverity(level)}
                      variant="outline"
                      style={styles.severityButton}
                    >
                      {level}
                    </Button>
                  ))}
                </View>
                <View style={styles.severityLabels}>
                  <BodySmall color={theme.colors.neutral[500]}>Mild</BodySmall>
                  <BodySmall color={theme.colors.neutral[500]}>Intense</BodySmall>
                </View>
              </Card>
            )}

            {urgeSeverity !== null && (
              <>
                {/* Breathing Exercise */}
                <Card style={styles.breathingCard}>
                  <H4 align="center" style={styles.cardTitle}>
                    Breathing Exercise
                  </H4>
                  <Body align="center" color={theme.colors.neutral[600]}>
                    Follow the circle. Just breathe.
                  </Body>

                  <View style={styles.breathingContainer}>
                    <Animated.View
                      style={[
                        styles.breathingCircle,
                        {
                          transform: [
                            {
                              scale: isBreathing
                                ? breathingAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1, 1.5],
                                  })
                                : pulseAnim,
                            },
                          ],
                        },
                      ]}
                    >
                      <LinearGradient
                        colors={theme.colors.gradients.calm}
                        style={styles.breathingGradient}
                      >
                        <Body color={theme.colors.neutral[0]}>
                          {isBreathing
                            ? breathingPhase === 'in'
                              ? 'Breathe In'
                              : breathingPhase === 'hold'
                              ? 'Hold'
                              : 'Breathe Out'
                            : 'Start'}
                        </Body>
                      </LinearGradient>
                    </Animated.View>
                  </View>

                  <Button
                    onPress={() => setIsBreathing(!isBreathing)}
                    variant={isBreathing ? 'outline' : 'primary'}
                    fullWidth
                  >
                    {isBreathing ? 'Stop' : 'Start Breathing'}
                  </Button>
                </Card>

                {/* Urge Surfing Timer */}
                <Card variant="outlined" style={styles.timerCard}>
                  <View style={styles.timerContent}>
                    <Body style={styles.timerIcon}>🌊</Body>
                    <View style={styles.timerText}>
                      <H4>Surf the Urge</H4>
                      <BodySmall color={theme.colors.neutral[600]}>
                        Cravings typically peak and fade in 10-15 minutes
                      </BodySmall>
                    </View>
                  </View>
                  <Button variant="secondary" fullWidth>
                    Start Timer
                  </Button>
                </Card>

                {/* Distraction Activities */}
                <View style={styles.section}>
                  <H4 style={styles.sectionTitle}>Quick Distractions</H4>
                  <BodySmall
                    color={theme.colors.neutral[600]}
                    style={styles.sectionSubtitle}
                  >
                    Pick one and do it right now
                  </BodySmall>

                  <View style={styles.activitiesGrid}>
                    {distractionActivities.map((activity, index) => (
                      <Card key={index} variant="outlined" style={styles.activityCard}>
                        <Button variant="ghost" style={styles.activityButton}>
                          <View style={styles.activityContent}>
                            <Body style={styles.activityIcon}>{activity.icon}</Body>
                            <BodySmall align="center">{activity.title}</BodySmall>
                            <Caption color={theme.colors.neutral[500]}>
                              {activity.duration}
                            </Caption>
                          </View>
                        </Button>
                      </Card>
                    ))}
                  </View>
                </View>

                {/* Your Reasons Why */}
                <Card variant="flat" style={styles.reasonsCard}>
                  <H4 style={styles.cardTitle}>Remember Why You Started</H4>
                  <View style={styles.reasons}>
                    <View style={styles.reason}>
                      <Body style={styles.reasonIcon}>💪</Body>
                      <Body>Better health</Body>
                    </View>
                    <View style={styles.reason}>
                      <Body style={styles.reasonIcon}>🧠</Body>
                      <Body>Mental clarity</Body>
                    </View>
                    <View style={styles.reason}>
                      <Body style={styles.reasonIcon}>💰</Body>
                      <Body>Financial freedom</Body>
                    </View>
                  </View>
                </Card>

                {/* Emergency Contact */}
                <Card variant="outlined" style={styles.contactCard}>
                  <H4 align="center">Still struggling?</H4>
                  <Body align="center" color={theme.colors.neutral[600]}>
                    Reach out to your support network
                  </Body>
                  <Button variant="outline" fullWidth>
                    Call Accountability Partner
                  </Button>
                </Card>
              </>
            )}

            {/* Close Button */}
            <View style={styles.footer}>
              <Button onPress={onClose} variant="ghost" fullWidth>
                {urgeSeverity === null ? 'Go Back' : 'I'm Feeling Better'}
              </Button>
            </View>
          </Animated.View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: theme.spacing[6],
  },

  // Header
  header: {
    gap: theme.spacing[3],
    marginBottom: theme.spacing[8],
  },

  // Severity Card
  severityCard: {
    padding: theme.spacing[6],
    gap: theme.spacing[4],
  },
  severityTitle: {
    marginBottom: theme.spacing[2],
  },
  severityButtons: {
    flexDirection: 'row',
    gap: theme.spacing[2],
    justifyContent: 'center',
  },
  severityButton: {
    minWidth: 50,
  },
  severityLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  // Breathing Card
  breathingCard: {
    padding: theme.spacing[6],
    gap: theme.spacing[4],
    marginBottom: theme.spacing[4],
  },
  cardTitle: {
    marginBottom: theme.spacing[2],
  },
  breathingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 220,
    marginVertical: theme.spacing[4],
  },
  breathingCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
  },
  breathingGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  // Timer Card
  timerCard: {
    padding: theme.spacing[5],
    gap: theme.spacing[4],
    marginBottom: theme.spacing[6],
  },
  timerContent: {
    flexDirection: 'row',
    gap: theme.spacing[3],
    alignItems: 'center',
  },
  timerIcon: {
    fontSize: 32,
  },
  timerText: {
    flex: 1,
    gap: theme.spacing[1],
  },

  // Activities
  section: {
    marginBottom: theme.spacing[6],
  },
  sectionTitle: {
    marginBottom: theme.spacing[1],
  },
  sectionSubtitle: {
    marginBottom: theme.spacing[4],
  },
  activitiesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing[3],
  },
  activityCard: {
    flex: 1,
    minWidth: '30%',
    padding: 0,
  },
  activityButton: {
    padding: theme.spacing[4],
  },
  activityContent: {
    alignItems: 'center',
    gap: theme.spacing[2],
  },
  activityIcon: {
    fontSize: 28,
  },

  // Reasons Card
  reasonsCard: {
    padding: theme.spacing[5],
    marginBottom: theme.spacing[4],
  },
  reasons: {
    marginTop: theme.spacing[4],
    gap: theme.spacing[3],
  },
  reason: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[3],
  },
  reasonIcon: {
    fontSize: 20,
  },

  // Contact Card
  contactCard: {
    padding: theme.spacing[5],
    gap: theme.spacing[3],
    marginBottom: theme.spacing[6],
  },

  // Footer
  footer: {
    marginTop: theme.spacing[4],
  },
});
