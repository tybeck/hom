import React, {FC, useState} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import styled from 'styled-components/native';
import {Platform, View} from 'react-native';

import {Theme} from '@hom/theme';
import {OS} from '@hom/types';

const ButtonView = styled.View`
  position: relative;
  transition: unset;
`;

const ChildrenView = styled.View`
  align-self: center;
  transition: unset;
  left: 0;
  top: 0;
`;

export interface ButtonProps extends SvgProps {
  adjustWidthBy?: number;
  iosAdjustWidthBy?: number;
  autoSize?: boolean;
  fill?: string;
}

interface Dimensions {
  width: number;
  height: number;
}

const ButtonComponent: FC<ButtonProps> = ({
  children,
  autoSize,
  adjustWidthBy,
  iosAdjustWidthBy,
  fill = Theme.colors.white,
  ...props
}) => {
  const INITIAL_WIDTH = 189.418;
  const INITIAL_HEIGHT = 52.357;
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);

  const getAdjustedWidth = () => {
    if (Platform.OS === OS.ios) {
      return iosAdjustWidthBy || 0;
    }
    return adjustWidthBy || 0;
  };

  const onLayout = ({
    nativeEvent: {
      layout: {width, height},
    },
  }) => {
    setDimensions({
      width: width + getAdjustedWidth() || 0,
      height,
    });
  };

  const Children = () => <View style={{opacity: 1}}>{children}</View>;

  return (
    <ButtonView>
      <View
        style={{
          width: dimensions ? dimensions.width + getAdjustedWidth() || 0 : INITIAL_WIDTH,
          height: dimensions ? dimensions.height || 0 : INITIAL_HEIGHT,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {dimensions && (
          <Svg
            preserveAspectRatio="none"
            viewBox={`0 0 ${dimensions ? `${INITIAL_WIDTH} ${INITIAL_HEIGHT}` : '0 0'}`}
            {...props}
            width={dimensions.width + getAdjustedWidth() || INITIAL_WIDTH}
            height={dimensions.height || INITIAL_HEIGHT}
          >
            <Path
              data-name="Path 4891"
              d="M90.995.258c23.186 0 46.372-.113 69.556.082 5.631.048 11.267 1 16.879 1.773a19.1 19.1 0 0 1 5.672 1.994c2.782 1.378 4.586 3.94 5.263 7.646a73.764 73.764 0 0 1-.646 28.037c-1.3 6.411-5.785 9.372-10.786 10.292a102.492 102.492 0 0 1-16.025 1.776c-11.589.28-23.185.119-34.778.155q-49.2.151-98.4.344c-6.868.036-13.445-1.754-20.01-3.944C2.986 46.832.426 42.844.195 37.147c-.323-8.008-.2-16.062.043-24.081a9.265 9.265 0 0 1 5.4-8.564 25.3 25.3 0 0 1 9.888-2.585C40.678.84 65.819-.591 90.995.258Z"
              fill={fill}
            />
          </Svg>
        )}
      </View>
      <ChildrenView onLayout={onLayout}>
        <Children />
      </ChildrenView>
    </ButtonView>
  );
};

export {ButtonComponent};
