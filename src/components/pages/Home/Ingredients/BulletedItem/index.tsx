import React, {FC} from 'react';
import styled from 'styled-components/native';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {FontAwesomeIcon} from '@hom/support';
import {Sizing} from '@hom/types';

import {Typography} from '../../../../common/Typography';

const BulletedItemView = styled.View`
  margin-bottom: 5px;
  flex-direction: row;
  align-items: center;
`;

const BulletItemContent = styled.View`
  padding-bottom: 2px;
  margin-left: 5px;
`;

interface BulletedItemProps {
  children?: string;
}

const BulletedItem: FC<BulletedItemProps> = ({children}): React.ReactElement => {
  return (
    <BulletedItemView>
      <FontAwesomeIcon icon="check-square" color={Theme.colors[ColorName.CyanCornflowerBlue]} />
      <BulletItemContent>
        <Typography size={Sizing.Small}>{children}</Typography>
      </BulletItemContent>
    </BulletedItemView>
  );
};

export {BulletedItem};
