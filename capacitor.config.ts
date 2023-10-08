import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: "com.countries.app",
  appName: "countries",
  webDir: "build",
  server: {
    androidScheme: "https",
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#488AFF",
      sound: "beep.wav",
    },
    CapacitorCookies: {
      enabled: true,
    },
    // SplashScreen: {
    //   androidSplashResourceName: "splash",
    // },
  },
}

export default config;
