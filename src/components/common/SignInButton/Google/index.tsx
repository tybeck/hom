import React, {FC} from 'react';
import {Linking, Pressable} from 'react-native';
import {faGooglePlus} from '@fortawesome/free-brands-svg-icons/faGooglePlus';
import styled from 'styled-components/native';

import {ColorName} from '@hoagiesonmain/shared';

import {EnvironmentKey, Font, ThirdPartyColorName} from '@hom/types';
import {FontAwesomeIcon, isNativeMobile} from '@hom/support';
import {useApp} from '@hom/context';
import {Theme} from '@hom/theme';

import {Typography} from '../../';

const GoogleView = styled.View`
  background: ${Theme.colors[ThirdPartyColorName.Cinnabar]};
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

const GoogleIcon = styled.View`
  height: 100%;
  padding: 10px;
  align-self: center;
  justify-self: center;
`;

const GoogleText = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  flex: 1;
`;

interface Props {}

const SignInWithGoogle: FC<Props> = () => {
  const {getEndpointUri} = useApp();

  const onPress = () => {
    const endpoint = getEndpointUri(EnvironmentKey.GoogleAuthUri);
    if (isNativeMobile()) {
      return Linking.openURL(endpoint);
    }
    window.location.href = endpoint;
  };

  return (
    <Pressable onPress={onPress}>
      <GoogleView>
        <GoogleIcon>
          <FontAwesomeIcon
            icon={faGooglePlus}
            color={ColorName.White}
            iconWidth={24}
            iconHeight={24}
          />
        </GoogleIcon>
        <Border />
        <BorderRight />
        <GoogleText>
          <Typography color={ColorName.White} font={Font.Nunito} center>
            Sign in with Google
          </Typography>
        </GoogleText>
      </GoogleView>
    </Pressable>
  );
};

export {SignInWithGoogle};
