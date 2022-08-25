import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';

import {MapProvider} from './MapProvider';

const MapView = styled.View`
  background: ${Theme.colors[ColorName.SpaceCadet]}
  flex: 1;

  ${Platform.select({
    ios: css`
      max-height: 250px;
    `,
  })}
`;

interface MapProps {}

const Map: FC<MapProps> = () => {
  return (
    <MapView>
      <MapProvider />
    </MapView>
  );
};

export {Map};
