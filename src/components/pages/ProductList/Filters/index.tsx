import React, { FC, useEffect } from 'react'
import styled from 'styled-components/native';
import { RouteProp, useRoute } from '@react-navigation/native';

import { Font } from '@hom/types';
import { Typography } from '@hom/common';
import { useApp, useProductList } from '@hom/context';

import { Filter } from './Filter';

const Container = styled.View`
  padding: 0 20px 20px 20px;
  flex-direction: column;
  width: 100%;
`;

const HeadingView = styled.View`
  margin-bottom: 25px;
  margin-top: 10px;
`;

const FiltersWrapper = styled.View`
  flex-direction: row;
  width: 100%;
`;

type ParamList = {
  Categories: {
    categories: string;
  };
};

export const Filters: FC = () => {
  const {categories} = useApp();
  const route = useRoute<RouteProp<ParamList, 'Categories'>>();
  const {selectedCategories, setSelectedCategories} = useProductList();

  useEffect(() => {
    const categoriesInRoute = (route?.params?.categories || '').split(',');
    if (!categoriesInRoute.join().length) {
      return;
    }
    const doesSelectedCategoriesMatchRoute = categoriesInRoute.every(category => selectedCategories.includes(category));
    if (!doesSelectedCategoriesMatchRoute) {
      setSelectedCategories(categoriesInRoute);
    }
  }, []);

  return (
    <Container>
      <HeadingView>
        <Typography font={Font.NunitoBlack} uppercase>Filter</Typography>
      </HeadingView>
      <FiltersWrapper>
        {categories && categories.length && categories.map((category, index) => (
          <Filter
            index={index}
            total={categories.length}
            category={category}
            key={category._id}
          />
        ))}
      </FiltersWrapper>
    </Container>
  )
}