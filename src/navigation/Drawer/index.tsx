import React from 'react';
import {createDrawerNavigator, DrawerNavigationOptions} from '@react-navigation/drawer';

import {DrawerNavigation, RootDrawerParamList} from '@hom/navigation-types';
import {Header} from '@hom/layout';
import {Home} from '@hom/pages';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  const screenOptions: DrawerNavigationOptions = {
    header: Header,
  };

  return (
    <Drawer.Navigator initialRouteName={DrawerNavigation.Home} screenOptions={screenOptions}>
      <Drawer.Screen name={DrawerNavigation.Home} component={Home} />
      <Drawer.Screen name={DrawerNavigation.Menu} component={Home} />
      <Drawer.Screen name={DrawerNavigation.Location} component={Home} />
      <Drawer.Screen name={DrawerNavigation.ContactUs} component={Home} />
    </Drawer.Navigator>
  );
}

export {Drawer, DrawerNavigator};
