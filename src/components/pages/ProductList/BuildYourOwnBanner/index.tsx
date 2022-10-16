import React, {FC} from 'react';
import styled from 'styled-components/native';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {buildYourOwnBanner as BuildYourOwnBannerImage} from '@hom/assets';
import {Button, Typography} from '@hom/common';
import {Font, Sizing} from '@hom/types';
import {unpackAsset} from '@hom/utils';

const BuildYourOwnView = styled.View`
  display: flex;
  flex-direction: row;
  background-color: ${Theme.colors.deepSaffron};
  flex: 0.6;
  padding: 20px;
  margin: 20px;
`;

const BuildYourOwnImage = styled.Image`
  min-width: 375px;
  align-items: flex-end;
  justify-content: flex-end;
  height: 100%;
`;

const TextView = styled.View`
  margin: 5px 0 15px;
`;

const TextColumn = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

const BuildYourOwnBanner: FC = () => {
  return (
    <BuildYourOwnView>
      <TextColumn>
        <Typography font={Font.LithosProBlack} size={Sizing.Large} color={ColorName.White}>
          Build your own hoagie
        </Typography>
        <TextView>
          <Typography color={ColorName.White}>
            Make a hoagie to your own liking! Add your meats, cheeses, condiments and more in our
            custom hoagie builder.
          </Typography>
        </TextView>
        <Button
          text="Get Started"
          fill={ColorName.SpaceCadet}
          typographyProps={{
            font: Font.LithosProBlack,
            color: ColorName.White,
          }}
          onPress={() => console.log('get started.')}
        />
      </TextColumn>
      <BuildYourOwnImage resizeMode="contain" source={unpackAsset(BuildYourOwnBannerImage)} />
    </BuildYourOwnView>
  );
};

export {BuildYourOwnBanner};