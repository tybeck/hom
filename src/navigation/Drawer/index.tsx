import React from 'react';
import {createDrawerNavigator, DrawerNavigationOptions} from '@react-navigation/drawer';

import {DrawerNavigation, RootDrawerParamList} from '@hom/navigation-types';
import {Header} from '@hom/layout';
import {Home, ProductList} from '@hom/pages';
import {Content} from '@hom/types';

import {PageFactory} from '../../components/pages/Page';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerNavigator() {
  const screenOptions: DrawerNavigationOptions = {
    header: () => <Header />,
  };

  return (
    <Drawer.Navigator initialRouteName={DrawerNavigation.Home} screenOptions={screenOptions}>
      <Drawer.Screen
        name={DrawerNavigation.Home}
        component={PageFactory(Home, {components: [Content.HomeContactUs, Content.HomeContactUs]})}
      />
      <Drawer.Screen name={DrawerNavigation.Products} component={PageFactory(ProductList)} />
      <Drawer.Screen name={DrawerNavigation.Location} component={Home} />
      <Drawer.Screen name={DrawerNavigation.ContactUs} component={Home} />
    </Drawer.Navigator>
  );
}

export {Drawer, DrawerNavigator};
