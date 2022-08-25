import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Platform, Pressable} from 'react-native';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {FbReview, useReviewQuery} from '@hom/queries';
import {FontAwesomeIcon} from '@hom/support';

import {Typography} from '../../../common/Typography';
import {css} from 'styled-components';

const ReviewContainer = styled.View`
  background: ${Theme.colors[ColorName.White]};
  position: relative;
  padding: 55px;

  ${Platform.select({
    ios: css`
      padding: 30px;
    `,
  })}
`;

const Review = styled.View`
  align-items: center;
  justify-content: center;
  min-height: 175px;
  padding: 35px 55px;

  ${Platform.select({
    ios: css`
      padding: 15px 0;
    `,
  })}
`;

const QuoteView = styled.View`
  position: absolute;
  left: 64px;
  top: -64px;

  ${Platform.select({
    ios: css`
      left: 32px;
      top: -32px;
    `,
  })}
`;

const Buttons = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const Button = styled.View`
  margin: 0 10px;
`;

function Reviews(): React.ReactElement {
  const {data} = useReviewQuery();
  const reviews = data?.getReviews || [];
  const [currentReview, setCurrentReview] = useState<FbReview | null>(null);

  useEffect(() => {
    if (reviews && reviews.length) {
      setCurrentReview(reviews?.[0] || null);
    }
  }, [reviews]);

  const previous = () => {
    const index = reviews.findIndex((review) => review === currentReview);
    let latestIndex = index - 1;
    if (index === 0) {
      latestIndex = reviews.length - 1;
    }
    setCurrentReview(reviews[latestIndex]);
  };

  const next = () => {
    const index = reviews.findIndex((review) => review === currentReview);
    let latestIndex = index + 1;
    if (index === reviews.length - 1) {
      latestIndex = 0;
    }
    setCurrentReview(reviews[latestIndex]);
  };

  return (
    <ReviewContainer style={{position: 'relative'}}>
      <QuoteView>
        <FontAwesomeIcon
          icon="quote-left"
          color={Theme.colors[ColorName.SpaceCadet]}
          iconWidth={128}
          iconHeight={128}
          iosSize={64}
        />
      </QuoteView>
      {currentReview && (
        <Review>
          <Typography color={ColorName.SpaceCadet}>{currentReview.review}</Typography>
        </Review>
      )}
      <Buttons>
        <Pressable onPress={previous}>
          <Button>
            <FontAwesomeIcon
              icon="circle-chevron-left"
              color={Theme.colors[ColorName.DeepSaffron]}
              iconWidth={32}
              iconHeight={32}
              iosSize={24}
            />
          </Button>
        </Pressable>
        <Pressable onPress={next}>
          <Button>
            <FontAwesomeIcon
              icon="circle-chevron-right"
              color={Theme.colors[ColorName.DeepSaffron]}
              iconWidth={32}
              iconHeight={32}
              iosSize={24}
            />
          </Button>
        </Pressable>
      </Buttons>
    </ReviewContainer>
  );
}

export {Reviews};
