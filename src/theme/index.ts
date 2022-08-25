import {SharedTheme} from '@hoagiesonmain/shared';
import {normalize} from './normalize';

import {ITheme} from '@hom/types';
import {Platform} from 'react-native';

export const Theme: ITheme = {
  ...SharedTheme,
  colors: {
    ...SharedTheme.colors,
    blueJeans: '#54ACEE',
    bdazzledBlue: '#365C98',
    cinnabar: '#E34A34',
  },
  fontSize: {
    mini: normalize(2.25),
    small: normalize(3.5),
    medium: normalize(4.25),
    xmedium: normalize(6.5),
    large: normalize(11),
    xlarge: normalize(13),
    xxlarge: normalize(16),
    ...Platform.select({
      ios: {
        medium: normalize(4),
        xmedium: normalize(7.5),
        large: normalize(7.5),
        xlarge: normalize(13),
        xxlarge: normalize(16),
      },
    }),
  },
  spaceSize: {
    mini: normalize(2.25),
    small: normalize(3),
    medium: normalize(3.75),
    xmedium: normalize(6.5),
    large: normalize(11),
    xlarge: normalize(13),
    xxlarge: normalize(16),
  },
};
