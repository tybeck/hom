import React from 'react';
import styled from 'styled-components/native';
import {Platform} from 'react-native';
import {css} from 'styled-components';

import {ColorName} from '@hoagiesonmain/shared';

import {Theme} from '@hom/theme';
import {usePostQuery} from '@hom/queries';

import {Heading} from '../../../common/Heading';
import {Typography} from '../../../common/Typography';

const PostContainer = styled.View`
  background: ${Theme.colors[ColorName.White]};
  flex-direction: column;
  position: relative;
  padding: 55px;

  ${Platform.select({
    ios: css`
      padding: 15px;
    `,
  })}
`;

const SlicedPosts = styled.View`
  flex-direction: row;
  width: 100%;

  ${Platform.select({
    ios: css`
      flex-direction: column;
    `,
  })}
`;

const Post = styled.View`
  background: ${Theme.colors[ColorName.Linen]};
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  min-height: 350px;
  margin: 2.5%;
  width: 28.33%;
  padding: 2.5%;

  ${Platform.select({
    ios: css`
      width: 100%;
      margin: 7px 0 7px 0;
      padding: 20px;
      min-height: auto;
    `,
  })}
`;

function Posts(): React.ReactElement {
  const {data} = usePostQuery();
  const posts = data?.getPosts || [];

  if (!posts.length) {
    return null;
  }

  return (
    <PostContainer style={{position: 'relative'}}>
      <Heading textCenter>#hoagiesonmain</Heading>
      <SlicedPosts>
        {posts.length &&
          posts.slice(0, 3).map((post) => (
            <Post key={post._id}>
              <Typography color={ColorName.SpaceCadet}>{post.message}</Typography>
            </Post>
          ))}
      </SlicedPosts>
    </PostContainer>
  );
}

export {Posts};
