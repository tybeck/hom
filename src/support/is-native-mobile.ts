import {Platform} from 'react-native';

import {OS} from '@hom/types';

export function isNativeMobile() {
  return Platform.OS === OS.ios || Platform.OS === OS.android;
}
