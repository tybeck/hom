import React, {useEffect, useState} from 'react';
import {Asset} from 'expo-asset';

import {useCustomFonts} from '@hom/hooks';
import {useAuthLoader} from '@hom/hooks';
import {useApp} from '@hom/context';
import {noop} from '@hom/utils';

import AnimatedSplashScreen from '../AnimatedSplashScreen';

function AnimatedAppLoader({children, image}) {
  const [isSplashReady, setSplashReady] = useState<boolean>(false);
  const [isAppReady, setAppReady] = useState<boolean>(false);
  const [fontsLoaded] = useCustomFonts();
  const {hasSettingsLoaded} = useApp();
  const {isAuthReady} = useAuthLoader();

  useEffect(() => {
    if (isSplashReady && fontsLoaded && hasSettingsLoaded && isAuthReady) {
      setAppReady(true);
    }
  }, [isAuthReady, isSplashReady, fontsLoaded, hasSettingsLoaded]);

  useEffect(() => {
    (async () => {
      async function prepare() {
        await Asset.fromURI(image.uri)
          .downloadAsync()
          .finally(() => setSplashReady(true))
          .catch(noop);
      }
      await prepare();
    })();
  }, [image]);

  if (!isAppReady) {
    return null;
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

export default AnimatedAppLoader;
