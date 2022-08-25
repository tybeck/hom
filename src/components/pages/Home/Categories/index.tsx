import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {useCategoryQuery, Category as ICategory} from '@hom/queries';
import {hoagie, burger, fries, cheesesteak, chicken} from '@hom/assets';

import {Category} from './Category';
import {OS} from '@hom/types';

const CategoriesView = styled.View`
  flex-wrap: wrap;
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 920px;

  ${Platform.select({
    ios: css`
      height: auto;
      flex-direction: column;
    `,
  })}
`;

interface CategoryWrapProps {
  size: number;
  hover: number | null;
  isInHoverGroup: boolean;
  color: string;
}

const CategoryWrap = styled.View<CategoryWrapProps>`
  width: ${(props) => props.size}%;
  transition: 250ms all ease;
  position: relative;
  border-color: ${(props) => Theme.colors[props.color]};

  ${({isInHoverGroup, color}) =>
    isInHoverGroup &&
    css`
      border: 10px solid ${Theme.colors[color]};
    `}

  ${({hover}) =>
    hover &&
    css`
      border: 10px solid rgba(0, 0, 0, 0.75);
    `}
`;

const sizes = [30, 40, 30, 45, 35, 20];

const images = [hoagie, burger, fries, cheesesteak, chicken];

function Categories(): React.ReactElement {
  const {data} = useCategoryQuery();
  const categories = data?.getCategories || [];
  const [allCategories, setAllCategories] = useState<Omit<ICategory, '__typename'>[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const onMouseEnter = (categoryIndex: number) => () => setHoverIndex(categoryIndex);
  const onMouseLeave = () => setHoverIndex(null);

  useEffect(() => {
    if (categories && categories.length) {
      setAllCategories([
        ...categories,
        {
          color: '#FFF',
          name: 'And much more...',
          _id: '',
        },
      ]);
    }
  }, [categories]);

  const getSize = (categoryIndex) => {
    if (Platform.OS !== OS.web) {
      return 100;
    }
    return sizes[categoryIndex];
  };

  return (
    <CategoriesView>
      {allCategories.length !== 0 &&
        allCategories.map((category, categoryIndex) => {
          const groupIndex = Math.floor(categoryIndex / 3);
          const hoverGroupIndex = hoverIndex !== null ? Math.floor(hoverIndex / 3) : null;
          const isLastItem = allCategories.length - 1 === categoryIndex;
          let headingColor = null;
          if (isLastItem) {
            headingColor = ColorName.SpaceCadet;
          }
          return (
            <CategoryWrap
              size={getSize(categoryIndex)}
              onMouseEnter={onMouseEnter(categoryIndex)}
              onMouseLeave={onMouseLeave}
              hover={categoryIndex === hoverIndex}
              isInHoverGroup={
                (isLastItem && categoryIndex === hoverIndex) ||
                (!isLastItem && categoryIndex !== hoverIndex && groupIndex === hoverGroupIndex)
              }
              color={category.color}
              key={category._id}
            >
              <Category
                category={category}
                image={images[categoryIndex]}
                headingColor={headingColor}
              />
            </CategoryWrap>
          );
        })}
    </CategoriesView>
  );
}

export {Categories};
