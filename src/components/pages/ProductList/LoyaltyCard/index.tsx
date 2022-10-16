import React, {FC} from 'react';
import styled from 'styled-components/native';

import {ColorName} from '@hoagiesonmain/shared';

import {LoyaltyCard as Card} from '@hom/svg';
import {Typography} from '@hom/common';
import {Font, Sizing} from '@hom/types';
import {Theme} from '@hom/theme';
import {Logo} from '@hom/layout';

const CardContent = styled.View`
  padding: 40px 25px 10px 25px;
`;

const LoyaltyCardView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0.4;
  padding: 20px;
  margin: 20px;
  background: ${Theme.colors.cyanCornflowerBlue};
  position: relative;
`;

const LoyaltyCardContent = styled.View`
  position: absolute;
  padding: 20px;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

const LoyaltyCard: FC = () => {
  return (
    <LoyaltyCardView>
      <Typography size={Sizing.Large} font={Font.LithosProBlack} color={ColorName.White} textCenter>
        Get Our Loyalty Card
      </Typography>
      <CardContent>
        <Card>
          <LoyaltyCardContent>
            <Logo />
            <Typography font={Font.NunitoBlack} uppercase>
              Loyalty Card
            </Typography>
          </LoyaltyCardContent>
        </Card>
      </CardContent>
    </LoyaltyCardView>
  );
};

export {LoyaltyCard};
