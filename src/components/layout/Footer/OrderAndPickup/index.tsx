import React, {FC, useState} from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {Heading, Typography} from '@hom/common';
import {FontAwesomeIcon} from '@hom/support';
import {logoSmallest} from '@hom/assets';
import {unpackAsset} from '@hom/utils';
import {Font, SettingType} from '@hom/types';

import {PhoneNumber} from '../../PhoneNumber';
import {useApp} from '@hom/context';

const OrderAndPickupView = styled.View`
  background: ${Theme.colors[ColorName.SpaceCadet]};
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;

  ${Platform.select({
    ios: css`
      justify-content: flex-start;
      padding-top: 25px;
    `,
  })}
`;

const MapMarker = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;
const Phone = MapMarker;

const InfoTypography = styled(Typography)`
  margin-left: 10px;
`;

const OrderHeading = styled.View`
  margin: 20px 0;
`;

const LogoImage = styled.Image`
  width: 100%;
  height: 145px;
`;

const FooterPhoneNumber = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

interface OrderAndPickupProps {}

const OrderAndPickup: FC<OrderAndPickupProps> = () => {
  const {getSetting} = useApp();
  const [address] = useState<string>(getSetting(SettingType.Address));

  return (
    <OrderAndPickupView>
      <LogoImage resizeMode="contain" source={unpackAsset(logoSmallest)} />
      <OrderHeading>
        <Heading color={ColorName.White} textCenter>
          Order & Pickup
        </Heading>
      </OrderHeading>
      <MapMarker>
        <FontAwesomeIcon
          icon="location-dot"
          color={Theme.colors[ColorName.White]}
          iconWidth={24}
          iconHeight={24}
        />
        <InfoTypography color={ColorName.White}>{address}</InfoTypography>
      </MapMarker>
      <Phone>
        <FontAwesomeIcon
          icon="phone"
          color={Theme.colors[ColorName.White]}
          iconWidth={24}
          iconHeight={24}
        />
        <FooterPhoneNumber>
          <PhoneNumber font={Font.Nunito} color={ColorName.White} />
        </FooterPhoneNumber>
      </Phone>
    </OrderAndPickupView>
  );
};

export {OrderAndPickup};
