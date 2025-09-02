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
    LOG_LEVEL: (process.env.EXPO_PUBLIC_LOG_LEVEL as any) || "debug",
    ANALYTICS_ENABLED: process.env.EXPO_PUBLIC_ANALYTICS_ENABLED === "true",
  };
};

export const ENV_CONFIG = getEnvironmentConfig();

// Environment checks
export const isDevelopment = ENV_CONFIG.ENV === "development";
export const isQA = ENV_CONFIG.ENV === "qa";
export const isProduction = ENV_CONFIG.ENV === "production";

// Logging utility based on environment
export const logger = {
  debug: (message: string, ...args: any[]) => {
    if (["debug"].includes(ENV_CONFIG.LOG_LEVEL)) {
      console.log(`[DEBUG] ${message}`, ...args);
    }
  },
  info: (message: string, ...args: any[]) => {
    if (["debug", "info"].includes(ENV_CONFIG.LOG_LEVEL)) {
      console.info(`[INFO] ${message}`, ...args);
    }
  },
  warn: (message: string, ...args: any[]) => {
    if (["debug", "info", "warn"].includes(ENV_CONFIG.LOG_LEVEL)) {
      console.warn(`[WARN] ${message}`, ...args);
    }
  },
  error: (message: string, ...args: any[]) => {
    console.error(`[ERROR] ${message}`, ...args);
  },
};
