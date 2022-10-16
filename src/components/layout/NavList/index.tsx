import React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {AllScreenProps, DrawerNavigation} from '@hom/navigation-types';
import {Content, Font, HomScroll} from '@hom/types';

import {Link, LinkTypography} from '@hom/common';

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
  const route = useRoute();

  const getContentAreaFromPage = (page: DrawerNavigation) => {
    switch (page) {
      case DrawerNavigation.ContactUs:
        return Content.HomeContactUs;
      case DrawerNavigation.Location:
        return Content.Bottom;
      default:
        return Content.Top;
    }
  };

  const navigate = (page) => {
    return () => {
      const whitelistedPages = [
        DrawerNavigation.Home,
        DrawerNavigation.Location,
        DrawerNavigation.ContactUs,
      ];
      const childSymbol = Object.getOwnPropertySymbols(route)?.[0];
      if (childSymbol) {
        const name: DrawerNavigation = route[childSymbol].routes?.[0]?.name;
        if (DrawerNavigation.Home === name && whitelistedPages.includes(page)) {
          return globalThis.dispatchEvent(
            new CustomEvent(HomScroll, {detail: getContentAreaFromPage(page)}),
          );
        }
      }
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
        <Link text="Menu" typography={typography} onPress={navigate(DrawerNavigation.Products)} />
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
