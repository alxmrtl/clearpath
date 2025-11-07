# ClearPath - Quick Start Guide

## 🚀 Get Running in 60 Seconds

### Prerequisites
- Node.js 18+ installed
- Expo Go app on your phone (download from App Store / Play Store)

### Installation

```bash
# Navigate to the app directory
cd clearpath-app

# Install dependencies (if not already done)
npm install

# Start the development server
npm start
```

### Viewing the App

When Expo starts, you'll see a QR code.

**On your phone:**
1. Open the Expo Go app
2. Scan the QR code
3. App loads on your device!

**On your computer:**
- Press `i` for iOS simulator (requires Xcode on Mac)
- Press `a` for Android emulator (requires Android Studio)
- Press `w` for web browser

---

## 📱 The Experience Flow

### 1. Welcome Screen
- Beautiful animated seed growing
- "Begin Your Journey" button
- Sets the emotional tone

### 2. Onboarding (3 steps)
- Current usage assessment
- Motivations selection
- Journey type selection

### 3. Home Dashboard
- Growing tree visualization
- Days clean counter
- Emergency toolkit access
- Daily actions

### 4. Emergency Toolkit
- Tap "I Need Support" from home
- Breathing exercises
- Distraction activities
- Urge surfing timer

---

## 🎨 Design System Reference

### Colors
```typescript
import { theme } from './src/theme';

theme.colors.primary[500]    // Sage green - main brand
theme.colors.secondary[500]  // Sky blue - calm
theme.colors.accent[500]     // Coral - energy
```

### Components
```typescript
import { Button, Card, H2, Body } from './src/components';

// Usage
<Button variant="primary" size="large" onPress={handlePress}>
  Click Me
</Button>

<Card variant="elevated" padding={6}>
  <H2>Title</H2>
  <Body>Content here</Body>
</Card>
```

### Spacing
```typescript
theme.spacing[4]   // 16px
theme.spacing[6]   // 24px
theme.spacing[8]   // 32px
```

---

## 📂 Project Structure

```
clearpath-app/
├── src/
│   ├── theme/              # Design system
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── index.ts
│   │
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Typography.tsx
│   │   ├── Input.tsx
│   │   └── index.ts
│   │
│   ├── screens/            # App screens
│   │   ├── WelcomeScreen.tsx
│   │   ├── OnboardingScreen.tsx
│   │   ├── HomeScreen.tsx
│   │   └── EmergencyToolkitScreen.tsx
│   │
│   └── navigation/         # Navigation setup
│       └── AppNavigator.tsx
│
├── App.tsx                 # App entry point
├── package.json
└── tsconfig.json
```

---

## 🛠️ Development Tips

### Adding a New Screen

1. Create in `src/screens/YourScreen.tsx`
2. Follow existing patterns (props interface, styles at bottom)
3. Use theme constants for colors, spacing
4. Export from `src/screens/index.ts`
5. Add to navigation

### Creating a New Component

1. Create in `src/components/YourComponent.tsx`
2. Use TypeScript for props interface
3. Style with theme constants
4. Export from `src/components/index.ts`

### Maintaining Design Quality

**Before adding any new UI:**
1. Check theme colors - use existing palette
2. Check spacing scale - use theme.spacing
3. Check typography - use pre-defined text styles
4. Add shadows with theme.shadows
5. Keep animations natural (200-400ms)

---

## 🎯 Key Quality Standards

### ✅ Do
- Use theme colors exclusively
- Use spacing scale (4px grid)
- Add smooth animations to state changes
- Think mobile-first
- Test on real device
- Maintain 44x44 minimum touch targets

### ❌ Don't
- Add random colors
- Use arbitrary spacing (12px, 7px, etc.)
- Make changes without animations
- Assume desktop viewing
- Skip device testing
- Create tiny buttons

---

## 🚨 Troubleshooting

### App won't start
```bash
# Clear cache and restart
rm -rf node_modules
npm install
npm start -- --clear
```

### Animations not working
- Check babel.config.js includes reanimated plugin
- Restart Metro bundler

### TypeScript errors
```bash
# Check TypeScript compiler
npx tsc --noEmit
```

---

## 📖 Resources

- **Design System**: `src/theme/`
- **Component Library**: `src/components/`
- **Design Manifesto**: `../DESIGN_MANIFESTO.md`
- **App Blueprint**: `../02-app-explainer-blueprint.md`

---

## 🎨 Design Principles to Remember

1. **Empathy First** - Design for someone in crisis
2. **Clarity Always** - No confusion, ever
3. **Beauty with Purpose** - Every detail serves function
4. **Consistency Breeds Trust** - Use the system
5. **Performance Matters** - Smooth animations, fast loads

---

## 💡 Pro Tips

### Quick Testing Loop
1. Save file
2. App auto-reloads
3. See changes instantly
4. Shake device for dev menu

### Design Iteration
1. Make change
2. View on device
3. Feel the interaction
4. Adjust timing/spacing
5. Repeat

### Color Debugging
```typescript
// Temporarily add border to see layout
style={{ borderWidth: 1, borderColor: 'red' }}
```

---

**You're ready to build.**

Every line of code you add should maintain the quality bar this foundation set.

**Make it beautiful. Make it work. Make it matter.**
