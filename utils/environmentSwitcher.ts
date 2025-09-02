import { ENV_CONFIG, Environment } from '@/config/environment';

export class EnvironmentSwitcher {
  static getCurrentEnvironment(): Environment {
    return ENV_CONFIG.ENV;
  }

  static getEnvironmentInfo() {
    return {
      current: ENV_CONFIG.ENV,
      apiBaseUrl: ENV_CONFIG.API_BASE_URL,
      appName: ENV_CONFIG.APP_NAME,
      logLevel: ENV_CONFIG.LOG_LEVEL,
      flipperEnabled: ENV_CONFIG.ENABLE_FLIPPER,
      analyticsEnabled: ENV_CONFIG.ANALYTICS_ENABLED,
    };
  }

  static isDevelopment(): boolean {
    return ENV_CONFIG.ENV === 'development';
  }

  static isQA(): boolean {
    return ENV_CONFIG.ENV === 'qa';
  }

  static isProduction(): boolean {
    return ENV_CONFIG.ENV === 'production';
  }

  // For debugging - display current environment info
  static logEnvironmentInfo() {
    console.log('🌍 Environment Info:', {
      Environment: ENV_CONFIG.ENV.toUpperCase(),
      'API Base URL': ENV_CONFIG.API_BASE_URL,
      'App Name': ENV_CONFIG.APP_NAME,
      'Log Level': ENV_CONFIG.LOG_LEVEL,
      'Flipper': ENV_CONFIG.ENABLE_FLIPPER ? 'Enabled' : 'Disabled',
      'Analytics': ENV_CONFIG.ANALYTICS_ENABLED ? 'Enabled' : 'Disabled',
    });
  }
}

// Auto-log environment on import (only in development)
if (__DEV__ && ENV_CONFIG.ENV === 'development') {
  EnvironmentSwitcher.logEnvironmentInfo();
}