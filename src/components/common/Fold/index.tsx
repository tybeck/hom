import React from 'react';
import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

import {Theme} from '@hom/theme';
import {FoldWave} from '@hom/svg';

interface FoldProps {
  width: number;
  height: number;
}

const FoldContent = styled.View`
  flex-direction: row;
  display: flex;
  height: 100%;
  width: 100%;
`;

const LeftFoldView = styled.View`
  flex: 1;
`;

const RightFoldView = styled.View<FoldProps>`
  display: flex;
  width: ${(props) => `${props.width / 2}px`};
  height: ${(props) => `${props.height}px`};
  background: ${Theme.colors.brightYellow};
  flex: 1;
`;

export const FoldImage = styled.Image`
  width: 175px;
  height: 75px;
`;

const FoldableView = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  right: 40%;
  top: 0;
`;

function Fold() {
  const {width, height} = Dimensions.get('window');
  return (
    <FoldContent>
      <LeftFoldView></LeftFoldView>
      <RightFoldView width={width} height={height}>
        <FoldableView>
          <FoldWave fill={Theme.colors.brightYellow} />
        </FoldableView>
      </RightFoldView>
    </FoldContent>
  );
}

export {Fold};
