import React from 'react';
import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';

import {FontAwesomeIcon, isElectron} from '@hom/support';
import {Font, IFont} from '@hom/fonts';
import {Theme} from '@hom/theme';
import {ButtonComponent} from '@hom/svg';

interface OrderNowTextProps {
  font: IFont;
}

const OrderNowText = styled.Text<OrderNowTextProps>`
  position: relative;
  z-index: 2;
  color: ${() => Theme.colors.white};
  font-family: '${(props) => props.font}';
  text-transform: uppercase;
  margin-left: 5px;
`;

const ButtonView = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 8px 24px;
  width: ${() => (isElectron() ? 'calc(100% + 1px)' : '100%')};
`;

function OrderNowButton() {
  return (
    <Pressable onPress={() => {}}>
      <View>
        <ButtonComponent adjustWidthBy={1} fill={Theme.colors.cyanCornflowerBlue} autoSize>
          <ButtonView>
            <FontAwesomeIcon icon="shopping-cart" color={Theme.colors.white} />
            <OrderNowText font={Font.NunitoBlack}>Order Now</OrderNowText>
          </ButtonView>
        </ButtonComponent>
      </View>
    </Pressable>
  );
}

export {OrderNowButton};
