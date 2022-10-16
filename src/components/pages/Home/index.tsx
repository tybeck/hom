import React, {FC} from 'react';
import styled from 'styled-components/native';

import {useApp} from '@hom/context';
import {Content} from '@hom/types';

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
`;

const Home: FC = ({children}): React.ReactElement => {
  const {setComponentPositionY} = useApp();

  const onSubscribePositionChange = (value) => setComponentPositionY(Content.HomeContactUs, value);

  return (
    <HomeView>
      {/*<Fold />*/}
      <Delivery />
      <Categories />
      <Ingredients />
      <Reviews />
      <Posts />
      <Subscribe onPositionChange={onSubscribePositionChange} />
      {children}
    </HomeView>
  );
};

export {Home};
