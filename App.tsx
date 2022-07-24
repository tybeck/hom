import Constants from 'expo-constants';
import * as SplashScreen from 'expo-splash-screen';

import AnimatedAppLoader from './src/components/preload/AnimatedAppLoader';
import MainScreen from './src/components/main-screen';

import { noop } from './src/utils/noop';

SplashScreen
  .preventAutoHideAsync()
  .catch(noop);

export default function App() {
  return (
    <AnimatedAppLoader image={{ uri: Constants.manifest.splash.image }}>
      <MainScreen />
    </AnimatedAppLoader>
  );
}