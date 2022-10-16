import React, {FC} from 'react';
import {Platform} from 'react-native';
import {IconProp} from '@fortawesome/fontawesome-svg-core';
import styled from 'styled-components/native';

import {OS} from '@hom/types';

import {isElectron} from './is-electron';

interface Icon {
  icon: IconProp;
  color?: string;
  size?: number | string;
}

interface IconProps {
  iconHeight?: number;
  iconWidth?: number;
  iosSize?: number;
}

const Icon = React.lazy(async (): Promise<{default: FC<Icon>}> => {
  if (isElectron()) {
    const {FontAwesomeIcon} = await import('@fortawesome/react-fontawesome');
    return {
      default: FontAwesomeIcon,
    };
  }
  const {FontAwesomeIcon} = await import('@fortawesome/react-native-fontawesome');
  return {
    default: FontAwesomeIcon,
  };
});

const StyledIcon = styled<IconProps>(Icon)`
  ${({iconWidth}) =>
    iconWidth &&
    `
    width: ${iconWidth}px;
  `}
  ${({iconHeight}) =>
    iconHeight &&
    `
    height: ${iconHeight}px;
  `}
`;

export const FontAwesomeIcon: FC<Icon & IconProps> = (props) => {
  const {iosSize, ...iconProps} = props;
  let otherProps: Partial<Icon> = {};
  if (Platform.OS === OS.ios && props.iosSize) {
    otherProps.size = iosSize;
  }
  return <StyledIcon {...iconProps} {...otherProps} />;
};
