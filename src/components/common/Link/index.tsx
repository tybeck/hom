import React, {FC} from 'react';
import {Pressable} from 'react-native';

import {Typography, TypographyProps} from '../Typography';

export type LinkTypography = Omit<TypographyProps, 'text'>;
export interface LinkProps {
  text: string;
  onPress: () => void;
  typography?: LinkTypography;
}

const Link: FC<LinkProps> = ({text, onPress, typography}) => {
  return (
    <Pressable onPress={onPress}>
      <Typography text={text} {...typography} />
    </Pressable>
  );
};

export {Link};
