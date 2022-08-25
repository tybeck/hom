import React from 'react';
import {Pressable, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {FontAwesomeIcon} from '@hom/support';

function BurgerMenuButton() {
  const navigation = useNavigation();
  const navigate = () => {
    return navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Pressable onPress={navigate}>
      <View>
        <FontAwesomeIcon icon="bars" />
      </View>
    </Pressable>
  );
}

export {BurgerMenuButton};
