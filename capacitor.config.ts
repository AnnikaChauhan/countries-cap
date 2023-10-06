import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.countries.app',
  appName: 'countries',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
