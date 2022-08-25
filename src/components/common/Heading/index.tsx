import React, {FC} from 'react';

import {ColorName} from '@hoagiesonmain/shared';

import {Font, Sizing} from '@hom/types';

import {Typography} from '../';

interface HeadingProps {
  children: string;
  color?: ColorName;
  /**
   * @prop center
   * Justify & Align center
   */
  center?: boolean;
  /**
   * @prop textCenter
   * Align text center
   */
  textCenter?: boolean;
}

const Heading: FC<HeadingProps> = ({children, color, center, textCenter}) => {
  return (
    <Typography
      text={children}
      color={color || ColorName.SpaceCadet}
      font={Font.LithosProBlack}
      size={Sizing.Large}
      textCenter={textCenter}
      center={center}
    />
  );
};

export {Heading};
