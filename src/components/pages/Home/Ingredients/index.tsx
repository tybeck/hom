import React from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {basketOfGoods, carrotsMeat, hoagieRoll, sausageChicken} from '@hom/assets';
import {Font, OS, Sizing} from '@hom/types';
import {unpackAsset} from '@hom/utils';

import {BulletedItem} from './BulletedItem';

import {Heading} from '../../../common/Heading';
import {Typography} from '../../../common/Typography';

const IngredientView = styled.View`
  flex-direction: column;
  display: flex;
  background: ${Theme.colors.linen};
  padding: 55px;
  flex-wrap: wrap;

  ${Platform.OS !== OS.web &&
  css`
    padding: 40px 20px 55px;
  `}
`;

const IngredientsWrapper = styled.View`
  flex-direction: row;
  margin-top: 55px;

  ${Platform.OS !== OS.web &&
  css`
    flex-direction: column;
    margin-top: 25px;
    flex: 1;
  `}
`;

const IngredientsContent = styled.View`
  flex-direction: column;
  display: flex;
`;

const IngredientImagery = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  position: relative;
  min-height: 600px;
  max-height: 600px;
  padding: 0 25px;

  ${Platform.OS !== OS.web &&
  css`
    min-height: 100px;
    max-height: 100px;
    margin-bottom: 30px;
    margin-top: 30px;
    padding: 0;
  `}
`;

const IngredientColumn = styled.View`
  margin: 8px 0;
`;

const IngredientImage = styled.Image`
  width: 25%;
  height: 100%;
`;

const Disclaimer = styled.View`
  padding-bottom: 35px;
  margin-top: 35px;
  width: 100%;
  flex: 1;

  ${Platform.OS !== OS.web &&
  css`
    padding-bottom: 0;
  `}
`;

function Ingredients(): React.ReactElement {
  return (
    <IngredientView>
      <Heading textCenter>Best Quality Ingredients</Heading>
      <IngredientsWrapper>
        <IngredientsContent>
          <IngredientColumn>
            <Typography
              font={Font.LithosProBlack}
              color={ColorName.CyanCornflowerBlue}
              size={Sizing.Xmedium}
            >
              Fresh Products
            </Typography>
            <BulletedItem>Made Fresh Everyday</BulletedItem>
            <BulletedItem>Hand-Tossed</BulletedItem>
          </IngredientColumn>
          <IngredientColumn>
            <Typography
              font={Font.LithosProBlack}
              color={ColorName.CyanCornflowerBlue}
              size={Sizing.Xmedium}
            >
              Ground Beef
            </Typography>
            <BulletedItem>Signature blended beef</BulletedItem>
            <BulletedItem>Never frozen</BulletedItem>
          </IngredientColumn>
        </IngredientsContent>
        <IngredientImagery>
          <IngredientImage resizeMode="contain" source={unpackAsset(basketOfGoods)} />
          <IngredientImage resizeMode="contain" source={unpackAsset(sausageChicken)} />
          <IngredientImage resizeMode="contain" source={unpackAsset(hoagieRoll)} />
          <IngredientImage resizeMode="contain" source={unpackAsset(carrotsMeat)} />
        </IngredientImagery>
        <IngredientsContent>
          <IngredientColumn>
            <Typography
              font={Font.LithosProBlack}
              color={ColorName.CyanCornflowerBlue}
              size={Sizing.Xmedium}
            >
              Ground Turkey
            </Typography>
            <BulletedItem>Ground fresh</BulletedItem>
            <BulletedItem>Never frozen</BulletedItem>
          </IngredientColumn>
          <IngredientColumn>
            <Typography
              font={Font.LithosProBlack}
              color={ColorName.CyanCornflowerBlue}
              size={Sizing.Xmedium}
            >
              Artisan Buns
            </Typography>
            <BulletedItem>Available gluten-free</BulletedItem>
            <BulletedItem>Custom recipe</BulletedItem>
          </IngredientColumn>
        </IngredientsContent>
      </IngredientsWrapper>
      <Disclaimer>
        <Typography font={Font.LithosProBlack} color={ColorName.CyanCornflowerBlue} textCenter>
          At Hoagies On Main we use the highest quality ingredients
        </Typography>
        <Typography font={Font.LithosProBlack} color={ColorName.CyanCornflowerBlue} textCenter>
          available at market
        </Typography>
      </Disclaimer>
    </IngredientView>
  );
}

export {Ingredients};
