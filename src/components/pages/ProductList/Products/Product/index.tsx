import React, { FC } from 'react';
import styled from 'styled-components/native';

import { Product as IProduct } from '@hom/queries';
import { Typography, AddToCart, AddToFavorites } from '@hom/common';
import { Font } from '@hom/types';

const ProductView = styled.View`
  min-height: 350px;
  border: 1px solid #000;
  border-radius: 8px;
  width: calc(25% - 15px);
  margin: 7.5px;
  align-items: center;
  justify-content: center;
`;

const Ingredients = styled.View`
  padding: 7.5px;
`;

const Price = styled.View`
  padding-bottom: 7.5px;
`;

interface ProductProps {
  product: IProduct;
  index: number;
}

export const Product: FC<ProductProps> = ({ product, index }) => {
  const ingredientNames = [
    ...product.meats,
    ...product.cheeses,
    ...product.condiments,
  ]
    .map(ingredient => ingredient.name)
    .join(', ');
  return (
    <ProductView>
      <AddToFavorites />
      <Typography font={Font.NunitoBlack}>{product.name}</Typography>
      <Ingredients>
        <Typography textCenter>{ingredientNames}</Typography>
      </Ingredients>
      <Price>
        <Typography font={Font.NunitoBlack}>${(product.price / 100).toFixed(2)}</Typography>
      </Price>
      <AddToCart />
    </ProductView>
  )
}