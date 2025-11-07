/**
 * Home Screen (Dashboard)
 *
 * The heart of the app. A beautiful, inspiring daily view.
 * Progress celebrated. Tree growing. Hope visualized.
 */

import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Animated,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { H2, H4, Body, BodySmall, Card, Button } from '../components';
import { theme } from '../theme';

const { width } = Dimensions.get('window');

interface HomeScreenProps {
  userStats: {
    daysClean: number;
    hoursClean: number;
    moneySaved: number;
    longestStreak: number;
  };
  onEmergency: () => void;
  onLogUrge: () => void;
  onCheckIn: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  userStats,
  onEmergency,
  onLogUrge,
  onCheckIn,
}) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.95);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header Gradient */}
        <LinearGradient
          colors={[theme.colors.primary[500], theme.colors.primary[600]]}
          style={styles.headerGradient}
        >
          <View style={styles.header}>
            <Body color={theme.colors.neutral[0]} style={styles.greeting}>
              Good morning 🌅
            </Body>
            <H2 color={theme.colors.neutral[0]}>
              Day {userStats.daysClean}
            </H2>
            <BodySmall color={theme.colors.primary[100]}>
              {userStats.hoursClean} hours of clarity
            </BodySmall>
          </View>
        </LinearGradient>

        {/* Tree Visualization Card */}
        <Animated.View
          style={[
            styles.treeCardContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Card style={styles.treeCard}>
            <View style={styles.treeContent}>
              <View style={styles.treeIllustration}>
                {/* Simplified beautiful tree */}
                <View style={styles.treeBase}>
                  {/* Trunk */}
                  <View style={styles.trunk} />
                  {/* Canopy */}
                  <View style={styles.canopy}>
                    <View style={[styles.canopyLayer, styles.canopyLayer1]} />
                    <View style={[styles.canopyLayer, styles.canopyLayer2]} />
                    <View style={[styles.canopyLayer, styles.canopyLayer3]} />
                  </View>
                  {/* Roots */}
                  <View style={styles.roots}>
                    <View style={styles.rootLeft} />
                    <View style={styles.rootRight} />
                  </View>
                </View>
              </View>

              <View style={styles.treeInfo}>
                <H4 color={theme.colors.primary[700]}>Young Sapling</H4>
                <Body color={theme.colors.neutral[600]}>
                  Your roots are growing deeper each day
                </Body>
              </View>
            </View>
          </Card>
        </Animated.View>

        {/* Quick Stats Grid */}
        <View style={styles.statsGrid}>
          <Card style={styles.statCard}>
            <H4 color={theme.colors.primary[600]}>
              ${userStats.moneySaved}
            </H4>
            <BodySmall color={theme.colors.neutral[600]}>Money saved</BodySmall>
          </Card>

          <Card style={styles.statCard}>
            <H4 color={theme.colors.secondary[600]}>
              {userStats.longestStreak}
            </H4>
            <BodySmall color={theme.colors.neutral[600]}>Longest streak</BodySmall>
          </Card>
        </View>

        {/* Emergency Toolkit - Always Accessible */}
        <Card variant="outlined" style={styles.emergencyCard}>
          <View style={styles.emergencyContent}>
            <View style={styles.emergencyText}>
              <H4>Feeling an urge?</H4>
              <Body color={theme.colors.neutral[600]}>
                You've got this. Tools are here to help.
              </Body>
            </View>
            <Button
              onPress={onEmergency}
              variant="primary"
              style={styles.emergencyButton}
            >
              I Need Support
            </Button>
          </View>
        </Card>

        {/* Daily Actions */}
        <View style={styles.actionsSection}>
          <H4 style={styles.sectionTitle}>Today's Actions</H4>

          <View style={styles.actionsGrid}>
            <Card variant="outlined" style={styles.actionCard}>
              <Button
                onPress={onCheckIn}
                variant="ghost"
                style={styles.actionButton}
              >
                <View style={styles.actionContent}>
                  <Body style={styles.actionIcon}>📝</Body>
                  <BodySmall align="center">Daily Check-in</BodySmall>
                </View>
              </Button>
            </Card>

            <Card variant="outlined" style={styles.actionCard}>
              <Button
                onPress={onLogUrge}
                variant="ghost"
                style={styles.actionButton}
              >
                <View style={styles.actionContent}>
                  <Body style={styles.actionIcon}>🌊</Body>
                  <BodySmall align="center">Log Urge</BodySmall>
                </View>
              </Button>
            </Card>

            <Card variant="outlined" style={styles.actionCard}>
              <Button
                onPress={() => {}}
                variant="ghost"
                style={styles.actionButton}
              >
                <View style={styles.actionContent}>
                  <Body style={styles.actionIcon}>🧘</Body>
                  <BodySmall align="center">Breathe</BodySmall>
                </View>
              </Button>
            </Card>

            <Card variant="outlined" style={styles.actionCard}>
              <Button
                onPress={() => {}}
                variant="ghost"
                style={styles.actionButton}
              >
                <View style={styles.actionContent}>
                  <Body style={styles.actionIcon}>📚</Body>
                  <BodySmall align="center">Learn</BodySmall>
                </View>
              </Button>
            </Card>
          </View>
        </View>

        {/* Motivational Quote */}
        <Card variant="flat" style={styles.quoteCard}>
          <Body color={theme.colors.primary[700]} style={styles.quote}>
            "Recovery is not linear. Every step forward, no matter how small, is
            progress worth celebrating."
          </Body>
        </Card>

        {/* Bottom Spacing */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.neutral[50],
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing[10],
  },

  // Header
  headerGradient: {
    paddingTop: theme.spacing[6],
    paddingBottom: theme.spacing[20],
    paddingHorizontal: theme.spacing[6],
    marginBottom: -theme.spacing[16],
  },
  header: {
    gap: theme.spacing[1],
  },
  greeting: {
    opacity: 0.9,
    marginBottom: theme.spacing[2],
  },

  // Tree Card
  treeCardContainer: {
    paddingHorizontal: theme.spacing[6],
    marginBottom: theme.spacing[5],
  },
  treeCard: {
    padding: theme.spacing[6],
  },
  treeContent: {
    alignItems: 'center',
    gap: theme.spacing[4],
  },
  treeIllustration: {
    width: width * 0.5,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  treeBase: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  // Tree Parts
  trunk: {
    width: 20,
    height: 60,
    backgroundColor: theme.colors.growth.seed,
    borderRadius: 4,
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
  },
  canopy: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    zIndex: 2,
  },
  canopyLayer: {
    backgroundColor: theme.colors.growth.sapling,
    borderRadius: 50,
    opacity: 0.8,
  },
  canopyLayer1: {
    width: 100,
    height: 60,
    marginBottom: -20,
  },
  canopyLayer2: {
    width: 80,
    height: 50,
    marginBottom: -15,
  },
  canopyLayer3: {
    width: 60,
    height: 40,
  },
  roots: {
    position: 'absolute',
    bottom: 20,
    width: 80,
    height: 30,
    zIndex: 0,
  },
  rootLeft: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: 30,
    height: 3,
    backgroundColor: theme.colors.growth.seed,
    borderRadius: 2,
    transform: [{ rotate: '20deg' }],
  },
  rootRight: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 30,
    height: 3,
    backgroundColor: theme.colors.growth.seed,
    borderRadius: 2,
    transform: [{ rotate: '-20deg' }],
  },

  treeInfo: {
    alignItems: 'center',
    gap: theme.spacing[1],
  },

  // Stats Grid
  statsGrid: {
    flexDirection: 'row',
    gap: theme.spacing[3],
    paddingHorizontal: theme.spacing[6],
    marginBottom: theme.spacing[5],
  },
  statCard: {
    flex: 1,
    padding: theme.spacing[5],
    alignItems: 'center',
    gap: theme.spacing[2],
  },

  // Emergency Card
  emergencyCard: {
    marginHorizontal: theme.spacing[6],
    marginBottom: theme.spacing[5],
    padding: theme.spacing[5],
    borderColor: theme.colors.accent[300],
    borderWidth: 2,
  },
  emergencyContent: {
    gap: theme.spacing[4],
  },
  emergencyText: {
    gap: theme.spacing[1],
  },
  emergencyButton: {
    backgroundColor: theme.colors.accent[500],
  },

  // Actions
  actionsSection: {
    paddingHorizontal: theme.spacing[6],
    marginBottom: theme.spacing[5],
  },
  sectionTitle: {
    marginBottom: theme.spacing[4],
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing[3],
  },
  actionCard: {
    flex: 1,
    minWidth: '45%',
    padding: 0,
  },
  actionButton: {
    padding: theme.spacing[4],
  },
  actionContent: {
    alignItems: 'center',
    gap: theme.spacing[2],
  },
  actionIcon: {
    fontSize: 28,
  },

  // Quote
  quoteCard: {
    marginHorizontal: theme.spacing[6],
    padding: theme.spacing[5],
  },
  quote: {
    fontStyle: 'italic',
    lineHeight: 24,
    textAlign: 'center',
  },

  bottomSpacer: {
    height: theme.spacing[10],
  },
});
