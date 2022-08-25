import React, {FC} from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

interface Props extends SvgProps {
  fill?: string;
}

const FoldWave: FC<Props> = ({fill, ...props}) => {
  return (
    <Svg
      viewBox="0 0 500 150"
      preserveAspectRatio="none"
      style={{
        height: '100%',
        width: '100%',
      }}
      {...props}
    >
      <Path d="M186.51-4.43c29.35 69.07-33.3 123.35 27.65 192.43L500 150V0Z" fill={fill} />
    </Svg>
  );
};

export {FoldWave};
