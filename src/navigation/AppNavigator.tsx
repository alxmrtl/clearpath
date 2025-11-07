/**
 * App Navigator
 *
 * Beautiful, intuitive navigation that feels natural.
 * Every transition is smooth. Every icon is meaningful.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { theme } from '../theme';
import { Body } from '../components';

const Tab = createBottomTabNavigator();

interface AppNavigatorProps {
  onEmergency: () => void;
}

export const AppNavigator: React.FC<AppNavigatorProps> = ({ onEmergency }) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.primary[600],
          tabBarInactiveTintColor: theme.colors.neutral[400],
          tabBarStyle: {
            height: 88,
            paddingBottom: 28,
            paddingTop: 12,
            borderTopWidth: 1,
            borderTopColor: theme.colors.neutral[200],
            backgroundColor: theme.colors.neutral[0],
            ...theme.shadows.lg,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500' as const,
            marginTop: 4,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <Body style={{ fontSize: 24 }}>{color === theme.colors.primary[600] ? '🏠' : '🏡'}</Body>
            ),
            tabBarLabel: 'Home',
          }}
        >
          {() => (
            <HomeScreen
              userStats={{
                daysClean: 7,
                hoursClean: 168,
                moneySaved: 84,
                longestStreak: 7,
              }}
              onEmergency={onEmergency}
              onLogUrge={() => {}}
              onCheckIn={() => {}}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Progress"
          component={PlaceholderScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Body style={{ fontSize: 24 }}>{color === theme.colors.primary[600] ? '📊' : '📈'}</Body>
            ),
            tabBarLabel: 'Progress',
          }}
        />

        <Tab.Screen
          name="Journal"
          component={PlaceholderScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Body style={{ fontSize: 24 }}>{color === theme.colors.primary[600] ? '📝' : '📄'}</Body>
            ),
            tabBarLabel: 'Journal',
          }}
        />

        <Tab.Screen
          name="Profile"
          component={PlaceholderScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Body style={{ fontSize: 24 }}>{color === theme.colors.primary[600] ? '👤' : '👥'}</Body>
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Placeholder component for tabs not yet implemented
const PlaceholderScreen = () => {
  return (
    <Body style={{ flex: 1, textAlign: 'center', marginTop: 100 }}>
      Coming soon...
    </Body>
  );
};
