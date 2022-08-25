import React, {useState} from 'react';
import styled from 'styled-components/native';

import {ColorName} from '@hoagiesonmain/shared';

import {Font, SettingType} from '@hom/types';
import {Theme} from '@hom/theme';
import {unpackAsset} from '@hom/utils';
import {newsletter} from '@hom/assets';
import {Input, Typography} from '@hom/common';

import {Send} from './Send';
import {Platform} from 'react-native';
import {css} from 'styled-components';
import {useApp} from '@hom/context';

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

function Subscribe(): React.ReactElement {
  const {getSetting} = useApp();
  const [phoneNo] = useState<string>(getSetting(SettingType.PhoneNumber));

  return (
    <SubscribeView>
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
}

export {Subscribe};
