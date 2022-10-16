import React, { FC } from 'react';

import { Button } from '@hom/common';
import { ColorName } from '@hoagiesonmain/shared';
import { Font, Sizing } from '@hom/types';

type AddToCartProps = {}

export const AddToCart: FC<AddToCartProps> = () => {
  return (
    <Button
      text="Add to cart"
      fill={ColorName.SpaceCadet}
      typographyProps={{
        size: Sizing.Small,
        font: Font.LithosProBlack,
        color: ColorName.White,
      }}
      onPress={() => console.log('add to cart')}
    />
  )
};