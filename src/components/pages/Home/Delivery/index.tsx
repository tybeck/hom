import React from 'react';
import {Platform} from 'react-native';
import styled from 'styled-components/native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {unpackAsset} from '@hom/utils';
import {Font, OS} from '@hom/types';
import {Theme} from '@hom/theme';

import {Button} from '../../../common/Button';
import {Heading} from '../../../common/Heading';
import {Typography} from '../../../common/Typography';

const DeliveryView = styled.View<{platform: string}>`
  flex-direction: row;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 450px;
  max-height: 650px;
  background: ${Theme.colors.linen};

  ${Platform.OS !== OS.web &&
  css`
    flex-direction: column;
    min-height: 500px;
    max-height: 725px;
  `}
`;

const DeliveryImageContent = styled.View`
  justify-content: center;
  height: 100%;
  width: 100%;
  flex: 1;
`;

const DeliveryImage = styled.Image`
  align-self: center;
  justify-content: center;
  height: 90%;
  width: 90%;

  ${Platform.OS === OS.web &&
  css`
    height: 80%;
    width: 80%;
  `}
`;

const DeliveryContent = styled.View`
  justify-content: flex-start;
  flex: 1;

  ${Platform.OS === OS.web &&
  css`
    justify-content: center;
  `}
`;

const DeliveryContentPadded = styled.View`
  justify-content: center;
  height: 80%;
  width: 90%;

  ${Platform.OS !== OS.web &&
  css`
    width: 100%;
    padding: 20px;
  `}
`;

const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 25px;

  ${Platform.OS !== OS.web &&
  css`
    flex-direction: column;
  `}
`;

const DoordashButton = styled.View`
  margin-right: 25px;

  ${Platform.OS !== OS.web &&
  css`
    align-items: center;
    justify-content: center;
    width: 100%;
  `}
`;

const GrubHubButton = styled.View`
  ${Platform.OS !== OS.web &&
  css`
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    width: 100%;
  `}
`;

const Content = styled.View`
  margin: 15px 0 0;
`;

function Delivery(): React.ReactElement {
  return (
    <DeliveryView>
      <DeliveryImageContent>
        <DeliveryImage
          source={unpackAsset(require('../../../../../assets/delivery.png'))}
          resizeMode="contain"
        />
      </DeliveryImageContent>
      <DeliveryContent>
        <DeliveryContentPadded>
          <Heading textCenter={Platform.OS !== OS.web}>We deliver with DoorDash & GrubHub</Heading>
          <Content>
            <Typography
              text="You can order delivery right from our site with DoorDash™!  We also deliver directly through DoorDash and GrubHub™, which you can do by following the links below"
              color={ColorName.DavysGrey}
            />
          </Content>
          <Buttons>
            <DoordashButton>
              <Button
                text="Order from Doordash"
                fill={ColorName.CyanCornflowerBlue}
                typographyProps={{
                  font: Font.NunitoBlack,
                  color: ColorName.White,
                }}
              />
            </DoordashButton>
            <GrubHubButton>
              <Button
                text="Order from GrubHub"
                fill={ColorName.CyanCornflowerBlue}
                typographyProps={{
                  font: Font.NunitoBlack,
                  color: ColorName.White,
                }}
              />
            </GrubHubButton>
          </Buttons>
        </DeliveryContentPadded>
      </DeliveryContent>
    </DeliveryView>
  );
}

export {Delivery};
