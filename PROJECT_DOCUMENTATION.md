# Artivo Sales App - Project Documentation

## 📱 Project Overview

**Artivo Sales App** is a React Native mobile application built with Expo, designed for sales operations. The app follows modern development practices with TypeScript, Redux Toolkit, and a well-structured component architecture.

### Key Information

- **Framework**: Expo SDK 53 with React Native 0.79.6
- **Language**: TypeScript
- **State Management**: Redux Toolkit with RTK Query
- **Navigation**: Expo Router (file-based routing)
- **UI Architecture**: Atomic Design Pattern
- **Internationalization**: i18next (English & Hindi)
- **Theme**: Light mode

---

## 🏗️ Project Architecture

### Directory Structure

```
ArtivoSalesApp/
├── app/                    # Expo Router screens
│   ├── (tabs)/            # Tab-based navigation
│   │   ├── index.tsx      # Dashboard/Home screen
│   │   ├── explore.tsx    # Explore screen
│   │   └── components.tsx # Components showcase
│   └── _layout.tsx        # Root layout with providers
├── components/            # Atomic Design Components
│   ├── atoms/            # Basic UI elements
│   ├── molecules/        # Composite components
│   └── organisms/        # Complex components
├── config/               # Configuration files
├── constants/            # App constants
├── contexts/             # React contexts
├── hooks/                # Custom hooks
├── i18n/                 # Internationalization
├── services/             # API services
├── store/                # Redux store & API
├── utils/                # Utility functions
└── assets/               # Images, fonts, etc.
```

### Component Architecture (Atomic Design)

- **Atoms**: Basic UI elements (StyledText, HelloWave, IconSymbol)
- **Molecules**: Composite components (Form, LanguageToggle)
- **Organisms**: Complex components (CustomTabBar, ParallaxScrollView, ErrorBoundary)

---

## 🌍 Environment Configuration

The app supports multiple environments with automatic switching:

### Environment Files

- `.env.development` - Development environment
- `.env.qa` - QA/Testing environment
- `.env.production` - Production environment

### Environment Variables

```bash
EXPO_PUBLIC_ENV=development
EXPO_PUBLIC_API_BASE_URL=https://dev-api.artivo.com/api/v1
EXPO_PUBLIC_APP_NAME=Artivo Sales (Dev)
EXPO_PUBLIC_ENABLE_FLIPPER=true
EXPO_PUBLIC_LOG_LEVEL=debug
EXPO_PUBLIC_ANALYTICS_ENABLED=false
```

### Environment Switching Scripts

```bash
# Development
npm run start:dev
npm run android:dev
npm run ios:dev

# QA
npm run start:qa
npm run android:qa
npm run ios:qa

# Production
npm run start:prod
npm run android:prod
npm run ios:prod
```

---

## 🛠️ Development Tools & Features

### Code Generation (Plop.js)

Automated component generation with templates:

```bash
npm run generate              # Interactive generator
npm run generate:atom         # Create atom component
npm run generate:molecule     # Create molecule component
npm run generate:organism     # Create organism component
npm run generate:hook         # Create custom hook
npm run generate:screen       # Create screen
npm run generate:tab-screen   # Create tab screen (auto-registers)
```

### Key Features Implemented

- ✅ **Multi-environment support** with automatic switching
- ✅ **Internationalization** (English/Hindi)
- ✅ **Fixed color styling** system without theme switching
- ✅ **Redux Toolkit** with RTK Query for API management
- ✅ **Reusable Form component** with validation
- ✅ **Error Boundary** for crash handling
- ✅ **Custom Tab Bar** with haptic feedback
- ✅ **Environment-aware logging** system
- ✅ **TypeScript** with strict configuration
- ✅ **Code generation** templates for rapid development

---

## 🔧 Technical Stack

### Core Dependencies

```json
{
  "expo": "~53.0.22",
  "react": "19.0.0",
  "react-native": "0.79.6",
  "@reduxjs/toolkit": "^2.8.2",
  "expo-router": "~5.1.5",
  "react-hook-form": "^7.62.0",
  "i18next": "^25.4.2",
  "react-i18next": "^15.7.3",
  "axios": "^1.11.0"
}
```

### Development Tools

- **ESLint**: Code linting with Expo config
- **TypeScript**: Strict type checking
- **Plop.js**: Code generation templates
- **Expo Dev Tools**: Development and debugging

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Expo CLI
- iOS Simulator / Android Emulator

### Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm run start:dev

# Run on specific platforms
npm run android:dev    # Android
npm run ios:dev        # iOS
npm run web            # Web
```

### Environment Setup

1. Copy appropriate environment file to `.env`
2. Update API endpoints and configuration
3. Run environment-specific scripts

---

## 📊 API Integration

### Base API Configuration

- **Base URL**: Environment-specific API endpoints
- **Timeout**: 10 seconds
- **Headers**: JSON content type
- **Interceptors**: Request/response logging and error handling
- **Authentication**: Ready for token-based auth

### RTK Query Setup

```typescript
// Configured with:
- Automatic caching
- Background refetching
- Error handling
- TypeScript support
- Tag-based invalidation
```

---

## 🎨 UI/UX Features

### Styling System

- Fixed color scheme without theme switching
- Consistent design across all components
- Styled components with predefined colors
- Simplified styling approach

### Internationalization

- English and Hindi language support
- Dynamic language switching
- Centralized translation management
- RTL support ready

### Navigation

- File-based routing with Expo Router
- Custom tab bar with haptic feedback
- Typed route parameters
- Deep linking support

---

## 📝 Form Management

### Reusable Form Component

```typescript
// Features:
- React Hook Form integration
- Automatic validation
- Error display
- Loading states
- TypeScript types
- Fixed styling support
```

See `FORM_USAGE.md` for detailed usage examples.

---

## 🔍 Code Quality & Standards

### TypeScript Configuration

- Strict mode enabled
- Path aliases configured (`@/*`)
- Expo types included
- Comprehensive type coverage

### ESLint Configuration

- Expo recommended rules
- TypeScript support
- Consistent code formatting

### Project Standards

- Atomic Design Pattern
- Component co-location
- Barrel exports (index.ts files)
- Environment-based configuration

---

## 🚀 Deployment & Build

### Build Scripts

```bash
npm run build:dev     # Development build
npm run build:qa      # QA build
npm run build:prod    # Production build
```

### Environment-Specific Builds

Each environment has its own:

- API endpoints
- App names
- Feature flags
- Analytics settings
- Debug configurations

---

## 📋 Current Status

### Implemented Features

- ✅ Project structure and architecture
- ✅ Environment configuration system
- ✅ Fixed styling and internationalization
- ✅ Redux store with RTK Query
- ✅ Reusable form components
- ✅ Code generation templates
- ✅ Custom navigation components
- ✅ Error handling and logging

### Ready for Development

- API integration endpoints configured
- Component library established
- Development tools set up
- Build and deployment scripts ready
- Code generation workflows active

---

## 🎯 Next Steps

1. **API Integration**: Connect to actual Artivo Sales API endpoints
2. **Authentication**: Implement login/logout functionality
3. **Sales Features**: Add sales-specific screens and functionality
4. **Testing**: Add unit and integration tests
5. **Performance**: Optimize bundle size and performance
6. **CI/CD**: Set up automated build and deployment

---

## 👥 Development Team Notes

### Code Generation Usage

Use `npm run generate` for rapid component creation. All templates follow project standards and include TypeScript types.

### Environment Switching

Always use environment-specific scripts (`npm run start:dev`) to ensure correct configuration loading.

### Component Development

Follow Atomic Design principles. Place components in appropriate directories (atoms/molecules/organisms).

### API Development

Use RTK Query for all API calls. Base configuration handles authentication, logging, and error handling.

---

**Project Status**: ✅ **Ready for Feature Development**

The foundation is solid with modern React Native practices, comprehensive tooling, and scalable architecture. The project is ready for sales-specific feature implementation.
