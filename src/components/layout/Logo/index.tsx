import React from 'react';
import styled from 'styled-components/native';

import {unpackAsset} from '@hom/utils';

export const LogoView = styled.View`
  display: flex;
`;

export const LogoImage = styled.Image`
  width: 175px;
  height: 75px;
`;

function Logo() {
  return (
    <LogoView>
      <LogoImage
        source={unpackAsset(require('../../../../assets/splash.png'))}
        resizeMode="contain"
      />
    </LogoView>
  );
}

export {Logo};
