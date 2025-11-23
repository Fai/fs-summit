# Summit Events - React Native Event App Boilerplate

A production-ready React Native event application boilerplate built with Expo, TypeScript, and modern best practices. Perfect for conferences, summits, workshops, and any event-based applications.

## Features

### Core Functionality
- **Event Listing**: Browse events with beautiful card layouts
- **Event Details**: Comprehensive event information with speaker bios
- **Interactive Map**: View event locations on an interactive map
- **Search & Filter**: Find events by title, speaker, or description
- **Favorites**: Bookmark events for quick access (persisted locally)
- **Date Filtering**: Filter events by day (Friday, Saturday, Sunday)

### Technical Features
- **TypeScript**: Full type safety across the entire application
- **Modern Architecture**: Clean, scalable folder structure
- **Theme System**: Comprehensive design tokens with dark mode support
- **Animations**: Smooth animations using React Native Reanimated
- **Accessibility**: WCAG compliant with proper ARIA labels
- **State Management**: Context API for global state
- **Navigation**: React Navigation v7 with stack and tab navigation
- **Persistent Storage**: AsyncStorage for favorites
- **Responsive Design**: Works seamlessly on all screen sizes

## Tech Stack

- **React Native**: 0.76.5
- **Expo**: ~52.0.0
- **TypeScript**: ~5.7.2
- **React Navigation**: v7
- **React Native Reanimated**: ~3.16.1
- **React Native Maps**: 1.18.0
- **AsyncStorage**: ^2.1.0

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── EventCard.tsx
│   ├── FilterTabs.tsx
│   ├── SearchBar.tsx
│   └── EmptyState.tsx
├── screens/            # Screen components
│   ├── EventsScreen.tsx
│   ├── EventDetailScreen.tsx
│   └── MapScreen.tsx
├── navigation/         # Navigation configuration
│   └── RootNavigator.tsx
├── contexts/           # React Context providers
│   └── AppContext.tsx
├── hooks/             # Custom React hooks
│   └── useTheme.ts
├── theme/             # Design system
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   └── index.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── constants/         # App constants and configuration
│   ├── mockData.ts
│   └── config.ts
├── utils/             # Utility functions
│   └── dateUtils.ts
└── services/          # API and external services
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (Mac only) or Android Emulator

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fs-summit
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
- Add your Google Maps API key for Android
- Configure other environment variables as needed

### Running the App

```bash
# Start the Expo development server
npm start

# Run on iOS
npm run ios

# Run on Android
npm run android

# Run on web
npm run web
```

## Configuration

### Google Maps Setup

For the map feature to work on Android:

1. Get a Google Maps API key from [Google Cloud Console](https://console.cloud.google.com/)
2. Update `app.json` with your API key:
```json
"android": {
  "config": {
    "googleMaps": {
      "apiKey": "YOUR_API_KEY_HERE"
    }
  }
}
```

### Customizing Theme

The theme is located in `src/theme/`. You can customize:

- **Colors**: Edit `src/theme/colors.ts`
- **Spacing**: Edit `src/theme/spacing.ts`
- **Typography**: Edit `src/theme/typography.ts`

### Adding Your Events

Replace the mock data in `src/constants/mockData.ts` with your actual events. Each event should follow the `Event` interface defined in `src/types/index.ts`.

## Building for Production

### Development Build
```bash
expo build:ios
expo build:android
```

### Production Build with EAS
```bash
# Install EAS CLI
npm install -g eas-cli

# Configure EAS
eas build:configure

# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android
```

## Customization Guide

### Adding a New Screen

1. Create screen component in `src/screens/`
2. Add route type to `RootStackParamList` in `src/types/index.ts`
3. Add screen to navigator in `src/navigation/RootNavigator.tsx`

### Adding a New Component

1. Create component in `src/components/`
2. Use TypeScript for props interface
3. Implement accessibility features
4. Use theme hook for styling

### Integrating Backend API

1. Create service files in `src/services/`
2. Update `src/constants/config.ts` with API endpoints
3. Replace mock data with API calls
4. Add loading and error states

## Best Practices Implemented

### Code Quality
- ESLint for code linting
- TypeScript for type safety
- Prettier for code formatting
- Consistent naming conventions

### Performance
- Memoization where appropriate
- FlatList for efficient list rendering
- Image optimization
- Lazy loading for heavy components

### UX/UI
- Smooth animations and transitions
- Loading states for async operations
- Error handling with user-friendly messages
- Empty states for better user experience
- Consistent design language

### Accessibility
- Screen reader support
- Proper accessibility labels
- Touch target sizes
- Color contrast ratios
- Keyboard navigation support

## Scripts

- `npm start`: Start Expo development server
- `npm run android`: Run on Android
- `npm run ios`: Run on iOS
- `npm run web`: Run on web
- `npm run lint`: Run ESLint
- `npm run type-check`: Run TypeScript type checking

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Future Enhancements

Potential features to add:

- [ ] User authentication
- [ ] QR code check-in
- [ ] Push notifications
- [ ] Calendar integration
- [ ] Social sharing
- [ ] Offline mode
- [ ] Multiple language support
- [ ] Analytics integration
- [ ] In-app messaging
- [ ] Attendee networking

## Documentation

- [Architecture Documentation](ARCHITECTURE.md) - Detailed architecture overview
- [Contributing Guide](CONTRIBUTING.md) - How to contribute to the project

## License

MIT License - feel free to use this boilerplate for your projects.

## Support

For issues and questions:
- Create an issue in the repository
- Check existing documentation
- Review React Native and Expo documentation

## Acknowledgments

Built with:
- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

---

Made with ❤️ for the event community
