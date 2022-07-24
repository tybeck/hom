import { useEffect, useState } from 'react';
import { Asset } from 'expo-asset';

import AnimatedSplashScreen from '../AnimatedSplashScreen';

import { noop } from '../../../utils/noop';

function AnimatedAppLoader({ children, image }) {
  const [isSplashReady, setSplashReady] = useState(false);

  useEffect(() => {
    (async () => {
      async function prepare() {
        await Asset
          .fromURI(image.uri)
          .downloadAsync()
          .finally(() => setSplashReady(true))
          .catch(noop);
      }
      await prepare();
    })()
  }, [image]);

  if (!isSplashReady) {
    return null;
  }

  return <AnimatedSplashScreen image={image}>{children}</AnimatedSplashScreen>;
}

export default AnimatedAppLoader;