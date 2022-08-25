import React, {useRef} from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

import {Footer} from '@hom/layout';
import {useApp} from '@hom/context';

import {Delivery} from './Delivery';
import {Categories} from './Categories';
import {Ingredients} from './Ingredients';
import {Reviews} from './Reviews';
import {Posts} from './Posts';
import {Subscribe} from './Subscribe';

import {Fold} from '../../common/Fold';

const HomeView = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  flex: 1;
`;

function Home(): React.ReactElement {
  const ref = useRef<any>(null);
  const {setScroll} = useApp();

  const onScroll = (event: {nativeEvent: {contentOffset: {y: number}}}) =>
    setScroll(event?.nativeEvent?.contentOffset?.y || 0);

  return (
    <HomeView>
      <ScrollView ref={ref} onScroll={onScroll} scrollEventThrottle={4}>
        {/*<Fold />*/}
        <Delivery />
        <Categories />
        <Ingredients />
        <Reviews />
        <Posts />
        <Subscribe />
        <Footer />
      </ScrollView>
    </HomeView>
  );
}

export {Home};
