import {Platform} from 'react-native';
import styled from 'styled-components/native';
import React, {FC} from 'react';

import {OS} from '@hom/types';

const WebView = styled.View`
  height: 100%;
  width: 100%;
  flex: 1;
`;

const AnyReactComponent: FC<any> = ({text}) => <div>{text}</div>;

export const MapProvider = React.lazy(async (): Promise<{default: FC}> => {
  if (Platform.OS === OS.web) {
    const {default: WebMap} = await import('google-map-react');
    return {
      default: () => (
        <WebView>
          <WebMap
            bootstrapURLKeys={{key: 'AIzaSyBqHFBrfGh4hJsjwAglXuRaff8Xa_YeYQc'}}
            center={{lat: 40.303922470598586, lng: -76.60372882072272}}
            zoom={18.5}
            options={{
              gestureHandling: 'none',
              zoomControl: true,
            }}
          >
            <AnyReactComponent
              lat={40.303922470598586}
              lng={-76.60372882072272}
              text="Hoagies on Main"
            />
          </WebMap>
        </WebView>
      ),
    };
  }
  const {default: MapView, PROVIDER_GOOGLE} = await import('react-native-maps');
  return Promise.resolve({
    default: () => (
      <WebView>
        <MapView
          provider={PROVIDER_GOOGLE}
          scrollEnabled={false}
          zoomControlEnabled
          camera={{
            zoom: 16.5,
            center: {latitude: 40.303922470598586, longitude: -76.60372882072272},
            altitude: 0,
            heading: 0,
            pitch: 0,
          }}
          style={{width: '100%', height: '100%'}}
        />
      </WebView>
    ),
  });
});
