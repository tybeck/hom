import {LinkingOptions} from '@react-navigation/native';

import {RootDrawerParamList} from '@hom/navigation-types';
import {isElectron} from '@hom/support';

export function getLinkingOptions() {
  const linkingOptions: LinkingOptions<RootDrawerParamList> = {
    enabled: true,
    prefixes: ['http://'],
  };
  if (isElectron()) {
    return null;
  }
  return linkingOptions;
}
