import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {AllScreenProps, DrawerNavigation} from '@hom/navigation-types';
import {Font} from '@hom/types';

import {Link, LinkTypography} from '../../common/Link';

export const NavListItem = styled.View`
  margin: 0 1rem;
`;

export const NavListView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  text-transform: uppercase;
  margin: 0 1rem;
`;

function NavList() {
  const navigation = useNavigation<AllScreenProps>();
  const navigate = (page) => {
    return () => {
      return navigation.navigate(page);
    };
  };
  const typography: LinkTypography = {
    font: Font.NunitoBlack,
  };

  return (
    <NavListView>
      <NavListItem>
        <Link text="Home" typography={typography} onPress={navigate(DrawerNavigation.Home)} />
      </NavListItem>
      <NavListItem>
        <Link text="Menu" typography={typography} onPress={navigate(DrawerNavigation.Menu)} />
      </NavListItem>
      <NavListItem>
        <Link
          text="Location"
          typography={typography}
          onPress={navigate(DrawerNavigation.Location)}
        />
      </NavListItem>
      <NavListItem>
        <Link
          text="Contact Us"
          typography={typography}
          onPress={navigate(DrawerNavigation.ContactUs)}
        />
      </NavListItem>
    </NavListView>
  );
}

export {NavList};
