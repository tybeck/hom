import React, {FC} from 'react';
import styled from 'styled-components/native';

import {logoSmallest} from '@hom/assets';
import {unpackAsset} from '@hom/utils';
import {SignInWithTwitter, SignInWithGoogle, SignInWithFacebook} from '@hom/common';

const SignInView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const LogoImage = styled.Image`
  margin-bottom: 55px;
  width: 100%;
  height: 35%;
`;

const SignInModal: FC = () => {
  return (
    <SignInView>
      <LogoImage resizeMode="contain" source={unpackAsset(logoSmallest)} />
      <SignInWithTwitter />
      <SignInWithFacebook />
      <SignInWithGoogle />
    </SignInView>
  );
};

export {SignInModal};
