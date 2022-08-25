import React, {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Platform, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import * as Updates from 'expo-updates';

import {getLinkingOptions} from '@hom/navigation-linking-options';
import {Navigation} from '@hom/navigation';
import {OS} from '@hom/types';

const RootView = styled(SafeAreaView)`
  flex: 1;
`;

function MainScreen() {
  // TODO: Implement "update" logic?
  const onReloadPress = useCallback(() => {
    if (Platform.OS === OS.web) {
      location.reload();
    } else {
      Updates.reloadAsync();
    }
  }, []);

  return (
    <RootView>
      {/*<View style={{ height: 2000 }}>*/}
      {/*  <View style={{ flex: 1 }}>*/}
      {/*    <ScrollView*/}
      {/*      scrollEventThrottle={4}*/}
      {/*      onScroll={()=>console.log('ok')}*/}
      {/*      contentContainerStyle={{ flexGrow: 1 }}*/}
      {/*    >*/}
      {/*      <Typography text="Hello" />*/}
      {/*    </ScrollView>*/}
      {/*  </View>*/}
      {/*</View>*/}
      <NavigationContainer linking={getLinkingOptions()}>
        <Navigation />
      </NavigationContainer>
    </RootView>
  );
}

export default MainScreen;
