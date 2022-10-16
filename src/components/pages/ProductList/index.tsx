import React, {FC} from 'react';
import styled from 'styled-components/native';

import {ProductListProvider} from '@hom/context';

import {Banners} from './Banners';
import {Filters} from './Filters';
import {Products} from './Products';

const ProductListView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 75px 0 0 0;
`;

const ProductList: FC = ({children}) => {
  return (
    <ProductListProvider>
      <ProductListView>
        <Banners />
        <Filters />
        <Products />
        {children}
      </ProductListView>
    </ProductListProvider>
  );
};

export {ProductList};
