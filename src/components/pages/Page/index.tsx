import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {ScrollView} from 'react-native';

import {useApp} from '@hom/context';
import {Footer} from '@hom/layout';
import {Content, HomScroll} from '@hom/types';

type HomEvent = CustomEvent & {detail: Content};

export type PageOptions = {
  components?: Content[];
};

const PageFactory = (ContentPage: FC, options: PageOptions = {}) => {
  return () => {
    const ref = useRef<ScrollView>(null);
    const [lastScrollType, setScrollType] = useState<Content>(null);
    const {setScroll, headerHeight, positions} = useApp();

    const onScroll = (event: {nativeEvent: {contentOffset: {y: number}}}) =>
      setScroll(event?.nativeEvent?.contentOffset?.y || 0);

    const getPositionYFromContentType = useCallback(
      (content: Content | number) => {
        if (typeof content === 'number') {
          return content;
        }
        switch (content) {
          case Content.Top:
            return 0;
          case Content.Bottom:
            return Content.Bottom;
          default:
            if (options?.components?.includes(content)) {
              return positions[content];
            }
        }
        return null;
      },
      [positions],
    );

    useEffect(() => {
      if (lastScrollType && headerHeight) {
        const y = getPositionYFromContentType(lastScrollType);
        if (y !== null) {
          if (y === Content.Bottom) {
            return ref?.current.scrollToEnd({animated: true});
          }
          ref?.current.scrollTo({y: y - headerHeight, x: 0, animated: false});
        }
      }
    }, [lastScrollType, headerHeight]);

    useEffect(() => {
      globalThis.addEventListener(HomScroll, (event: HomEvent) => setScrollType(event.detail));
    }, []);

    return (
      <ScrollView ref={ref} onScroll={onScroll} scrollEventThrottle={4} style={{flex: 1}}>
        <ContentPage>
          <Footer />
        </ContentPage>
      </ScrollView>
    );
  };
};

export {PageFactory};
