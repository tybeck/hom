import {Dimensions, PixelRatio, Platform} from 'react-native';

import {OS} from '@hom/types';

export function normalize(size: number) {
  const screenWidth = Dimensions.get('window').width;
  const scale = screenWidth / 414; // iPhone 11
  let scaledSize = size * scale;

  if (Platform.OS === OS.ios) {
    return Math.round(PixelRatio.roundToNearestPixel(scaledSize * 5));
  }

  return Math.round(PixelRatio.roundToNearestPixel(scaledSize));
}
