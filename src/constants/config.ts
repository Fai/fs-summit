import Constants from 'expo-constants';

interface Config {
  googleMapsApiKey: string;
  apiBaseUrl: string;
  apiTimeout: number;
  enableAnalytics: boolean;
  enableCrashReporting: boolean;
}

const getConfig = (): Config => {
  const extra = Constants.expoConfig?.extra || {};

  return {
    googleMapsApiKey: extra.googleMapsApiKey || 'YOUR_GOOGLE_MAPS_API_KEY',
    apiBaseUrl: extra.apiBaseUrl || 'https://api.example.com',
    apiTimeout: extra.apiTimeout || 30000,
    enableAnalytics: extra.enableAnalytics || false,
    enableCrashReporting: extra.enableCrashReporting || false,
  };
};

export const config = getConfig();
