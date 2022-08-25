import React, {FC} from 'react';
import {Linking, Pressable} from 'react-native';
import styled from 'styled-components/native';
import {faFacebook} from '@fortawesome/free-brands-svg-icons/faFacebook';

import {ColorName} from '@hoagiesonmain/shared';

import {EnvironmentKey, Font, ThirdPartyColorName} from '@hom/types';
import {FontAwesomeIcon, isNativeMobile} from '@hom/support';
import {useApp} from '@hom/context';
import {Theme} from '@hom/theme';

import {Typography} from '../../';

const FacebookView = styled.View`
  background: ${Theme.colors[ThirdPartyColorName.BdazzledBlue]};
  flex-direction: row;
  border-radius: 4px;
  min-width: 250px;
  margin-bottom: 15px;
`;

const Border = styled.View`
  height: 100%;
  width: 1px;
  background: rgba(0, 0, 0, 0.2);
`;

const BorderRight = styled.View`
  height: 100%;
  width: 1px;
  background: rgba(255, 255, 255, 0.2);
`;

const FacebookIcon = styled.View`
  height: 100%;
  padding: 10px;
  align-self: center;
  justify-self: center;
`;

const FacebookText = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  flex: 1;
`;

interface Props {}

const SignInWithFacebook: FC<Props> = () => {
  const {getEndpointUri} = useApp();

  const onPress = () => {
    const endpoint = getEndpointUri(EnvironmentKey.FbAuthUri);
    if (isNativeMobile()) {
      return Linking.openURL(endpoint);
    }
    window.location.href = endpoint;
  };

  return (
    <Pressable onPress={onPress}>
      <FacebookView>
        <FacebookIcon>
          <FontAwesomeIcon
            icon={faFacebook}
            color={ColorName.White}
            iconWidth={24}
            iconHeight={24}
          />
        </FacebookIcon>
        <Border />
        <BorderRight />
        <FacebookText>
          <Typography color={ColorName.White} font={Font.Nunito} center>
            Sign in with Facebook
          </Typography>
        </FacebookText>
      </FacebookView>
    </Pressable>
  );
};

export {SignInWithFacebook};
