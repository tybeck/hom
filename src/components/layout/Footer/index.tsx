import React, {FC} from 'react';
import styled from 'styled-components/native';
import {Platform, View} from 'react-native';
import {css} from 'styled-components';

import {isNativeMobile} from '@hom/support';

import {OrderAndPickup} from './OrderAndPickup';
import {Map} from './Map';

const FooterView = styled.View`
  flex-direction: row;
  min-height: 450px;

  ${Platform.select({
    ios: css`
      flex-direction: column;
      min-height: 790px;
      width: 100%;
    `,
  })}
`;

const FooterColumnView = styled.View`
  flex-direction: row;
  height: 100%;
  flex: 1;
`;

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  let components = [<OrderAndPickup />, <Map />];
  if (isNativeMobile()) {
    components = components.reverse();
  }
  return (
    <FooterView>
      {components.map((component, index) => (
        <FooterColumnView key={index}>{component}</FooterColumnView>
      ))}
    </FooterView>
  );
};

export {Footer};
