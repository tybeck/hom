import React from 'react';
import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';

import {isElectron} from '@hom/support';
import {Font, IFont} from '@hom/fonts';
import {Theme} from '@hom/theme';
import {ButtonComponent} from '@hom/svg';

interface SendTextProps {
  font: IFont;
}

const SendText = styled.Text<SendTextProps>`
  position: relative;
  z-index: 2;
  color: ${Theme.colors.white};
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

function Send() {
  return (
    <Pressable onPress={() => {}}>
      <View>
        <ButtonComponent adjustWidthBy={1} fill={Theme.colors.cyanCornflowerBlue} autoSize>
          <ButtonView>
            <SendText font={Font.NunitoBlack}>Send</SendText>
          </ButtonView>
        </ButtonComponent>
      </View>
    </Pressable>
  );
}

export {Send};
