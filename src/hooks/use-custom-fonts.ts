import {useFonts} from 'expo-font';

import {fonts} from '@hom/fonts';
import {isElectron} from '@hom/support';

export function useCustomFonts() {
  if (isElectron()) {
    /**
     * Electron will load it's files via CSS file
     * since `expo-font` is unable to load them in
     */
    require('../styles/fonts.css');
    return [true];
  }
  return useFonts(fonts);
}
