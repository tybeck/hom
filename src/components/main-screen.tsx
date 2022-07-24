import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { useCallback } from 'react';
import { Platform } from 'react-native';
import * as Updates from 'expo-updates';

import { Stack } from '@hom/navigation';
import { ScreenType } from '@hom/navigation-types';

import Home from './pages/Home';

function MainScreen() {
  // TODO: Implement "update" logic?:"
  const onReloadPress = useCallback(() => {
    if (Platform.OS === "web") {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenType.Home}>
        <Stack.Screen name={ScreenType.Home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainScreen;