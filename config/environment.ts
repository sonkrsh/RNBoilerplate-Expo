export type Environment = "development" | "qa" | "production";

export interface EnvironmentConfig {
  ENV: Environment;
  API_BASE_URL: string;
  APP_NAME: string;
  ENABLE_FLIPPER: boolean;
  LOG_LEVEL: "debug" | "info" | "warn" | "error";
  ANALYTICS_ENABLED: boolean;
}

// Get environment variables from Expo Constants
const getEnvironmentConfig = (): EnvironmentConfig => {
  const env = (process.env.EXPO_PUBLIC_ENV as Environment) || "development";

  return {
    ENV: env,
    API_BASE_URL:
      process.env.EXPO_PUBLIC_API_BASE_URL ||
      "https://dev-api.artivo.com/api/v1",
    APP_NAME: process.env.EXPO_PUBLIC_APP_NAME || "Artivo Sales (Dev)",
    ENABLE_FLIPPER: process.env.EXPO_PUBLIC_ENABLE_FLIPPER === "true",
    LOG_LEVEL: (process.env.EXPO_PUBLIC_LOG_LEVEL as "debug" | "info" | "warn" | "error") || "debug",
    ANALYTICS_ENABLED: process.env.EXPO_PUBLIC_ANALYTICS_ENABLED === "true",
  };
};

export const ENV_CONFIG = getEnvironmentConfig();

// Environment checks
export const isDevelopment = ENV_CONFIG.ENV === "development";
export const isQA = ENV_CONFIG.ENV === "qa";
export const isProduction = ENV_CONFIG.ENV === "production";

// Numeric log levels for better performance
const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };
const currentLogLevel = LOG_LEVELS[ENV_CONFIG.LOG_LEVEL];

// Sanitize log input to prevent injection
const sanitizeLogInput = (input: any): string => {
  if (typeof input === 'string') {
    return input.replace(/[\r\n]/g, ' ').replace(/[\x00-\x1f\x7f-\x9f]/g, '');
  }
  return String(input).replace(/[\r\n]/g, ' ').replace(/[\x00-\x1f\x7f-\x9f]/g, '');
};

// Logging utility based on environment
export const logger = {
  debug: (message: string, ...args: any[]) => {
    if (currentLogLevel <= LOG_LEVELS.debug) {
      console.log(`[DEBUG] ${sanitizeLogInput(message)}`, ...args.map(sanitizeLogInput));
    }
  },
  info: (message: string, ...args: any[]) => {
    if (currentLogLevel <= LOG_LEVELS.info) {
      console.info(`[INFO] ${sanitizeLogInput(message)}`, ...args.map(sanitizeLogInput));
    }
  },
  warn: (message: string, ...args: any[]) => {
    if (currentLogLevel <= LOG_LEVELS.warn) {
      console.warn(`[WARN] ${sanitizeLogInput(message)}`, ...args.map(sanitizeLogInput));
    }
  },
  error: (message: string, ...args: any[]) => {
    console.error(`[ERROR] ${sanitizeLogInput(message)}`, ...args.map(sanitizeLogInput));
  },
};
