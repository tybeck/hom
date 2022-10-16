import React, { FC, useEffect, useRef } from 'react'
import styled from 'styled-components/native';
import { Animated, Pressable } from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native';
import { SvgProps } from 'react-native-svg';
import { css } from 'styled-components';

import { ColorName } from '@hoagiesonmain/shared';

import { Burger, Chicken, Fries, Hoagie, Kids, Meatball } from '@hom/svg';
import { Category as ICategory } from '@hom/queries';
import { Category, Font } from '@hom/types'
import { Typography } from '@hom/common';
import { Theme } from '@hom/theme';
import { useProductList } from '@hom/context';

const FilterView = styled.View<{ index: number, total: number }>`
  margin: 0 0.5%;
  width: 15.83%;
  
  ${({ index }) => index === 0 &&
  css`
      margin-left: 0;
    `}

  ${({ index, total }) => index === (total - 1) &&
  css`
      margin-right: 0;
    `}
`;

const PressableView = styled.View`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  min-height: 225px;
`;

const AnimatedView = styled(Animated.View)`
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 8px;
  flex: 1;
`;

const IconView = styled.View`
  min-height: 150px;
  align-items: center;
  justify-content: center;
`;

const getCategoryIcon = (category: Category): FC<SvgProps> => {
  switch (category) {
    case Category.Hoagies:
      return Hoagie;
    case Category.CheesesteaksAndMeatballs:
      return Meatball;
    case Category.Chicken:
      return Chicken;
    case Category.AppetizersAndSides:
      return Fries;
    case Category.KidsMenu:
      return Kids;
    default:
      return Burger;
  }
}

interface FilterProps {
  index: number;
  total: number;
  category: ICategory;
}

type ParamList = {
  Categories: {
    categories: string;
  };
};

export const Filter: FC<FilterProps> = ({ index, total, category }) => {
  const {selectedCategories, setSelectedCategories} = useProductList();
  const route = useRoute<RouteProp<ParamList, 'Categories'>>();
  const key = (category.key as Category);
  const selected = selectedCategories.includes(key);
  const Icon = getCategoryIcon(key);
  const animated = useRef(new Animated.Value(0)).current;

  const onPress = (key: Category) => {
    return () => {
      const selected = selectedCategories.includes(key);
      let categories = [...selectedCategories, key];
      if (selected) {
        categories = selectedCategories.filter(categoryKey => categoryKey !== key);
      }
      setSelectedCategories(categories);
      if ('URLSearchParams' in window) {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('categories', categories.filter(categories => categories.length).join(','));
        const newRelativePathQuery = window.location.pathname + '?' + decodeURIComponent(searchParams.toString());
        history.pushState(null, '', newRelativePathQuery);
      }
      Animated
        .timing(animated, {
          toValue: selected ? 0 : 100,
          duration: 250,
          useNativeDriver: true,
        })
        .start();
    };
  }

  useEffect(() => {
    const categoriesInRoute = (route?.params?.categories || '').split(',');
    if (categoriesInRoute.includes(key)) {
      animated.setValue(100);
    }
  }, []);

  const fillInterpolation = animated.interpolate({
    inputRange: [0, 100],
    outputRange: [Theme.colors.cultured, Theme.colors.cyanCornflowerBlue],
  });

  return (
    <FilterView index={index} total={total}>
      <Pressable onPress={onPress(key)}>
        <PressableView>
          <AnimatedView
            style={{
              backgroundColor: fillInterpolation,
            }}
          >
            <IconView>
              <Icon fill={selected ? Theme.colors.white : Theme.colors.davysGrey} />
            </IconView>
            <Typography
              font={Font.NunitoBlack}
              color={selected ? ColorName.White : ColorName.DavysGrey}
              textCenter
              uppercase
            >
              {category.longName || category.name}
            </Typography>
          </AnimatedView>
        </PressableView>
      </Pressable>
    </FilterView>
  )
}