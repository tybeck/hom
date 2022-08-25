import 'dotenv/config';

export default {
  name: 'hom',
  slug: 'hom',
  scheme: 'hom',
  owner: 'hoagiesonmain',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: [
    '**/*'
  ],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.hompalmyra.hom',
    config: {
      googleMapsApiKey: 'AIzaSyBqHFBrfGh4hJsjwAglXuRaff8Xa_YeYQc'
    }
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    baseUri: process.env.BASE_URI,
    googleAuthUri: process.env.GOOGLE_AUTH_URI,
    fbAuthUri: process.env.FB_AUTH_URI,
    twitterAuthUri: process.env.TWITTER_AUTH_URI,
  },
}