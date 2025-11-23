# Contributing to Summit Events

Thank you for your interest in contributing to Summit Events! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Respect different viewpoints and experiences

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone <your-fork-url>`
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/your-feature-name`

## Development Workflow

### Before Making Changes

1. Ensure you're on the latest main branch
2. Pull the latest changes: `git pull origin main`
3. Create a new branch for your feature/fix

### Making Changes

1. Follow the existing code style
2. Use TypeScript for all new files
3. Add proper type definitions
4. Write meaningful commit messages
5. Test your changes thoroughly

### Code Style Guidelines

#### TypeScript
```typescript
// Use interfaces for object shapes
interface EventProps {
  event: Event;
  onPress: () => void;
}

// Use proper typing for components
const EventCard: React.FC<EventProps> = ({ event, onPress }) => {
  // Component code
};

// Avoid 'any' type
// Bad
const handleData = (data: any) => {};

// Good
const handleData = (data: Event[]) => {};
```

#### Components
```typescript
// Functional components with hooks
const MyComponent: React.FC<Props> = ({ prop1, prop2 }) => {
  const [state, setState] = useState<string>('');

  // Use useCallback for event handlers
  const handlePress = useCallback(() => {
    // Handler code
  }, [dependencies]);

  // Use useMemo for expensive computations
  const filteredData = useMemo(() => {
    return data.filter(item => condition);
  }, [data]);

  return <View>...</View>;
};
```

#### Styling
```typescript
// Use theme hook
const theme = useTheme();

// Create styles with StyleSheet.create
const styles = StyleSheet.create({
  container: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.background.default,
  },
});
```

#### Naming Conventions
- Components: PascalCase (e.g., `EventCard.tsx`)
- Files: camelCase for utilities (e.g., `dateUtils.ts`)
- Variables: camelCase (e.g., `eventData`)
- Constants: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)
- Types/Interfaces: PascalCase (e.g., `Event`, `EventProps`)

### Accessibility

Always include accessibility features:

```typescript
<TouchableOpacity
  accessibilityRole="button"
  accessibilityLabel="Add to favorites"
  accessibilityHint="Double tap to save this event"
>
  <Text>Favorite</Text>
</TouchableOpacity>
```

### Testing

Before submitting:

1. Test on both iOS and Android
2. Test in light and dark mode
3. Test with screen reader enabled
4. Verify no TypeScript errors: `npm run type-check`
5. Run linter: `npm run lint`

## Commit Messages

Follow conventional commits:

```
feat: add event filtering by category
fix: correct date formatting in event cards
docs: update README with deployment instructions
style: format code with prettier
refactor: extract event list logic to custom hook
test: add tests for EventCard component
chore: update dependencies
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update CHANGELOG.md if applicable
4. Fill out the PR template completely
5. Request review from maintainers

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on iOS
- [ ] Tested on Android
- [ ] Tested in dark mode
- [ ] Accessibility verified

## Screenshots
If applicable, add screenshots

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings
```

## Feature Requests

To request a feature:

1. Check if it already exists in issues
2. Create a new issue with 'Feature Request' label
3. Describe the feature and use case
4. Explain why it would be valuable

## Bug Reports

To report a bug:

1. Check if it's already reported
2. Create a new issue with 'Bug' label
3. Provide:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable
   - Device/OS information
   - App version

## Project Structure

When adding new files, follow this structure:

```
src/
├── components/     # Reusable components
├── screens/        # Screen components
├── navigation/     # Navigation setup
├── contexts/       # Context providers
├── hooks/          # Custom hooks
├── theme/          # Theme configuration
├── types/          # TypeScript types
├── constants/      # Constants and config
├── utils/          # Utility functions
└── services/       # External services
```

## Areas for Contribution

### High Priority
- Bug fixes
- Performance improvements
- Accessibility enhancements
- Documentation improvements

### Medium Priority
- New features from roadmap
- UI/UX improvements
- Test coverage
- Code refactoring

### Nice to Have
- Additional themes
- More animations
- Additional languages (i18n)
- Examples and demos

## Questions?

If you have questions:
- Check existing documentation
- Search closed issues
- Create a new issue with 'Question' label
- Join community discussions

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in release notes
- Credited in documentation

Thank you for contributing to Summit Events!
