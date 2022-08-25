import React, {FC, ReactNode} from 'react';
import styled from 'styled-components/native';
import {StyleProp, TextStyle} from 'react-native';

import {ColorName} from '@hoagiesonmain/shared';

import {Font, Size, Sizing} from '@hom/types';
import {Theme} from '@hom/theme';
import {css} from 'styled-components';

export interface TypographyProps {
  font?: Font;
  size?: Sizing;
  color?: ColorName;
  lineHeight?: Sizing;
  style?: StyleProp<TextStyle>;
  text?: string;
  center?: boolean;
  textCenter?: boolean;
  children?: string | ReactNode;
}

const TypographyText = styled.Text<TypographyProps>`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};

  ${({center}) =>
    center &&
    css`
      align-self: center;
    `};

  ${({textCenter}) =>
    textCenter &&
    css`
      text-align: center;
      width: 100%;
    `}
`;

const Typography: FC<TypographyProps> = ({children, text, style, ...props}) => {
  const typographyProps = {
    size: `${Theme.fontSize[props.size] || Theme.fontSize[Size.Medium]}px`,
    font: props.font || Font.Nunito,
    color: Theme.colors[props.color] || Theme.colors[ColorName.Black],
    center: props.center || false,
    textCenter: props.textCenter || false,
  };
  return (
    <TypographyText {...typographyProps} style={style}>
      {children || text}
    </TypographyText>
  );
};

export {Typography};
