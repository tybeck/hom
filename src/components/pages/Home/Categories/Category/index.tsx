import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Platform, Pressable} from 'react-native';

import {Category as TCategory} from '@hom/queries';
import {Theme} from '@hom/theme';
import {ColorName} from '@hoagiesonmain/shared';
import {unpackAsset} from '@hom/utils';

import {Heading} from '../../../../common/Heading';
import {Typography} from '../../../../common/Typography';
import {css} from 'styled-components';

interface ContainerProps {
  color: string;
}

const CategoryImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: -50%;
  z-index: 1;
  pointer-events: none;

  ${Platform.select({
    ios: css`
      right: -75%;
      height: 150%;
      width: 150%;
      top: 25%;
    `,
  })}
`;

const CategoryView = styled.View<ContainerProps>`
  background-color: ${(props) => props.color};
  flex-direction: row;
  padding: 40px 20px;
  display: flex;
  height: 100%;
  width: 100%;
  position: unset;
  align-self: center;
  justify-content: center;
  transition: 1000ms all ease;
`;

const Content = styled.View`
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  z-index: 1;
`;

const CategoryPress = styled(Pressable)`
  background: white;
  min-height: 450px;
  height: 100%;

  ${Platform.select({
    ios: css`
      min-height: 150px;
      max-height: 150px;
    `,
  })}
`;

interface Props {
  headingColor?: ColorName;
  category: TCategory;
  image?: any;
}

const Category: FC<Props> = ({category, image, headingColor}) => {
  return (
    <CategoryPress onPress={() => console.log('dick')}>
      <CategoryView color={Theme.colors[category.color]}>
        {image && <CategoryImage resizeMode="contain" source={unpackAsset(image)} />}
        <Content>
          <Heading color={headingColor || ColorName.White}>{category.name}</Heading>
          <Typography text="Yo our shit be bangin'" />
        </Content>
      </CategoryView>
    </CategoryPress>
  );
};

export {Category};
