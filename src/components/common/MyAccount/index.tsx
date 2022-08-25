import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {MainNavigation, SignInScreenProps} from '@hom/navigation-types';
import {FontAwesomeIcon, isElectron} from '@hom/support';
import {ButtonComponent} from '@hom/svg';
import {Font, IFont} from '@hom/fonts';
import {useApp} from '@hom/context';
import {Theme} from '@hom/theme';

interface AccountTextProps {
  font: IFont;
}

const AccountText = styled.Text<AccountTextProps>`
  position: relative;
  z-index: 2;
  font-family: '${(props) => props.font}';
  font-size: 18px;
  text-transform: uppercase;
  margin-right: 5px;
`;

const ButtonView = styled.View`
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  padding: 8px 24px;
  width: ${() => (isElectron() ? 'calc(100% + 1px)' : '100%')};
`;

const MyAccount: FC = () => {
  const {isLoggedIn} = useApp();
  const {navigate} = useNavigation<SignInScreenProps>();
  const onSignInNavigate = () => navigate(MainNavigation.SignIn);

  return (
    <Pressable onPress={onSignInNavigate}>
      <View>
        <ButtonComponent iosAdjustWidthBy={1} fill={Theme.colors.white} autoSize>
          <ButtonView>
            <AccountText font={Font.NunitoBlack}>
              {!isLoggedIn ? 'Sign In' : 'My Account'}
            </AccountText>
            {isLoggedIn && <FontAwesomeIcon icon="angle-down" />}
          </ButtonView>
        </ButtonComponent>
      </View>
    </Pressable>
  );
};

export {MyAccount};
