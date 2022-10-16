import React, {FC, RefObject, useState} from 'react';
import styled from 'styled-components/native';
import {Platform, View} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {Font, SettingType} from '@hom/types';
import {Theme} from '@hom/theme';
import {unpackAsset} from '@hom/utils';
import {newsletter} from '@hom/assets';
import {Input, Typography} from '@hom/common';
import {useApp} from '@hom/context';

import {Send} from './Send';

const SubscribeView = styled.View`
  background: ${Theme.colors[ColorName.Linen]};
  flex-direction: row;
  min-height: 300px;
  padding: 45px 12.5%;
  width: 100%;

  ${Platform.select({
    ios: css`
      padding: 15px;
      min-height: 450px;
      flex-direction: column;
      flex: 1;
    `,
  })}
`;

const SubscribeColumn = styled.View`
  justify-content: center;
  align-items: center;
  width: 65%;

  ${Platform.select({
    ios: css`
      width: 100%;
    `,
  })}
`;

const NewsletterImage = styled.Image`
  height: 100%;
  width: 35%;

  ${Platform.select({
    ios: css`
      margin-bottom: 20px;
      margin-top: 15px;
      width: 100%;
      height: 35%;
    `,
  })}
`;

const InputField = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 20px;
  width: 100%;

  ${Platform.select({
    ios: css`
      flex-direction: column;
      width: 90%;
    `,
  })}
`;

const SendButton = styled.View`
  margin-top: 15px;
`;

interface SubscribeProps<T> {
  viewRef?: RefObject<T>;
  onPositionChange?: (y: number) => void;
}

const Subscribe: FC<SubscribeProps<View>> = ({viewRef, onPositionChange}) => {
  const {getSetting} = useApp();
  const [phoneNo] = useState<string>(getSetting(SettingType.PhoneNumber));

  const onLayout = (event: {nativeEvent: {layout: {y: number}}}) => {
    const y = event?.nativeEvent?.layout?.y;
    if (onPositionChange) {
      onPositionChange(y);
    }
  };

  return (
    <SubscribeView ref={viewRef} onLayout={onLayout}>
      <NewsletterImage resizeMode="contain" source={unpackAsset(newsletter)} />
      <SubscribeColumn>
        <Typography font={Font.NunitoBlack} color={ColorName.SpaceCadet}>
          We're there when you need us there - available by phone {phoneNo}. You can also subscribe
          below for alerts, discounts and other notifications!
        </Typography>
        <InputField>
          <Input placeholder="Please enter your email" />
          <SendButton>
            <Send />
          </SendButton>
        </InputField>
      </SubscribeColumn>
    </SubscribeView>
  );
};

export {Subscribe};
