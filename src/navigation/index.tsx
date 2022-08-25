import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {MainNavigation} from '@hom/navigation-types';
import {SignInModal} from '@hom/modals';

import {DrawerNavigator} from './Drawer';

const RootStack = createStackNavigator();

function Navigation() {
  return (
    <RootStack.Navigator screenOptions={{header: () => null}}>
      <RootStack.Screen name={MainNavigation.Main} component={DrawerNavigator} />
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen name={MainNavigation.SignIn} component={SignInModal} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export {Navigation};
