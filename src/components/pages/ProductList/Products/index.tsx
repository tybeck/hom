import React, { FC, useCallback, useEffect } from 'react'
import styled from 'styled-components/native';
import {useLazyQuery} from '@apollo/client';

import {ProductsDocument, Product as IProduct} from '@hom/queries';
import {useApp, useProductList} from '@hom/context';

import { Product } from './Product';

const Container = styled.View`
  padding: 0 20px 20px 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`;

export const Products: FC = () => {
  const {categories} = useApp();
  const [getProducts, {data}] = useLazyQuery(ProductsDocument);
  const {selectedCategories} = useProductList();
  const products: IProduct[] = data?.getProducts || [];

  const getProductsQuery = useCallback(() => {
    const ids = selectedCategories.map(key => categories.find(category => category.key === key)?._id);
    getProducts({ variables: { categories: ids }});
  }, [selectedCategories]);

  useEffect(() => {
    getProductsQuery();
  }, [selectedCategories]);

  return (
    <Container>
      {Array.isArray(products) && products?.map((product, index) => (
        <Product
          key={product._id}
          product={product}
          index={index}
        />
      ))}
    </Container>
  )
}