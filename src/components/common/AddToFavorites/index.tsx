import React, { FC } from 'react';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { faHeart as freeTransparentHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as freeFilledHeart } from '@fortawesome/free-solid-svg-icons';

import { ColorName } from '@hoagiesonmain/shared';
import { FontAwesomeIcon } from '@hom/support';
import { Theme } from '@hom/theme';

const AddToFavoriteView = styled.View`
  position: absolute;
  right: 24px;
  top: 24px;
`;

type AddToFavoritesProps = {
  isFavorite?: boolean;
}

export const AddToFavorites: FC<AddToFavoritesProps> = ({ isFavorite }) => {
  const getFavorite = () => {
    if (!isFavorite) {
      return (
        <FontAwesomeIcon
          icon={freeTransparentHeart}
          color={Theme.colors[ColorName.DeepSaffron]}
          iconWidth={24}
          iconHeight={24}
        />
      )
    }

    return (
      <FontAwesomeIcon
        icon={freeFilledHeart}
        color={Theme.colors[ColorName.DeepSaffron]}
        iconWidth={24}
        iconHeight={24}
      />
    )
  };

  return (
    <AddToFavoriteView>
      <Pressable onPress={() => console.log('add to favorites')}>
          {getFavorite()}
      </Pressable>
    </AddToFavoriteView>
  );
};