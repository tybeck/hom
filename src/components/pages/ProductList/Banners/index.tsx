import React, {FC} from 'react';
import styled from 'styled-components/native';

import {BuildYourOwnBanner} from '../BuildYourOwnBanner';
import {LoyaltyCard} from '../LoyaltyCard';

const BannersView = styled.View`
  display: flex;
  flex-direction: row;
`;

const Banners: FC = () => {
  return (
    <BannersView>
      <BuildYourOwnBanner />
      <LoyaltyCard />
    </BannersView>
  );
};

export {Banners};
