import React, {useEffect, useRef, useState} from 'react';
import styled from 'styled-components/native';
import {css} from 'styled-components';

import {MyAccount, OrderNowButton} from '@hom/common';
import {isNativeMobile} from '@hom/support';
import {useApp} from '@hom/context';

import {BurgerMenuButton} from '../Drawer/BurgerMenuButton';
import {NavList} from '../NavList';
import {Logo} from '../Logo';
import {PhoneNumber} from '../PhoneNumber';

interface HeaderProps {
  bg: boolean;
}

const HeaderView = styled.View<HeaderProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2.5%;
  width: 100%;
  transition: 500ms all ease;

  ${({bg}) =>
    bg &&
    css`
      background: rgba(255, 255, 255, 0.85);
      box-shadow: rgba(0, 0, 0, 0.3) 0 4px 8px;
    `}
`;

const LeftView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`;

const PhoneView = styled.View`
  margin-right: 25px;
`;

function Header() {
  const [showBg, setShowBg] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isNative = isNativeMobile();
  const {scroll} = useApp();

  useEffect(() => {
    const element = headerRef?.current;
    if (headerHeight !== null) {
      if (element) {
        if (scroll > headerHeight) {
          if (!showBg) {
            setShowBg(true);
          }
          return;
        }
        if (showBg) {
          setShowBg(false);
        }
      }
    }
  }, [scroll]);

  const onLayout = ({
    nativeEvent: {
      layout: {height},
    },
  }) => {
    setHeaderHeight(height);
  };

  return (
    <HeaderView onLayout={onLayout} ref={headerRef} bg={showBg}>
      <LeftView>
        {isNative && <BurgerMenuButton />}
        <Logo />
        {!isNative && <NavList />}
        {!isNative && <OrderNowButton />}
      </LeftView>
      {!isNative && (
        <PhoneView>
          <PhoneNumber />
        </PhoneView>
      )}
      <MyAccount />
    </HeaderView>
  );
}

export {Header};
