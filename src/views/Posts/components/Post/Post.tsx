import { FC, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  currentPostSelector,
  getPostTC,
  togglePostLikeAC,
  useAppDispatch,
} from '../../../../store';
import { IconArrowLeft, IconArrowRight, IconBookmark } from '../../../../assets';
import { IconButton, LikeButton, Title } from '../../../../common';
import {
  LinkContainer,
  PostActions,
  PostContainer,
  PostLink,
  PostNavigation,
  PostPreview,
  PostText,
} from './styled';

export const Post: FC = () => {
  const dispatch = useAppDispatch();
  const { postId } = useParams<{ postId: string }>();
  const currentPost = useSelector(currentPostSelector);

  useEffect(() => {
    dispatch(getPostTC(Number(postId)));
  }, []);

  const toggleLikeHandler = useCallback((id: number | undefined, value: boolean) => {
    if (!id) {
      return;
    }

    dispatch(togglePostLikeAC({ id, value }));
  }, []);

  return (
    <PostContainer>
      <Title className="post-title-for-children" text={currentPost?.title ?? ''} indent />
      <PostPreview src={currentPost?.image} alt="post-preview" />
      <PostText>{currentPost?.text}</PostText>

      <PostActions>
        <div>
          <LikeButton
            liked={currentPost?.isLiked}
            onToggleLike={(value) => toggleLikeHandler(currentPost?.id, value)}
          />
          <LikeButton
            type="dislike"
            liked={currentPost?.isLiked}
            onToggleLike={(value) => toggleLikeHandler(currentPost?.id, value)}
          />
        </div>

        <IconButton
          icon={IconBookmark}
          title="Add to favorites"
          onClick={() => {
            alert('added to favs');
          }}
        />
      </PostActions>

      <PostNavigation>
        <PostLink>
          <img src={IconArrowLeft} alt="prev" />
          <LinkContainer>
            <span className="button-title">Prev</span>
            <span>Previous post title is here</span>
          </LinkContainer>
        </PostLink>
        <PostLink>
          <LinkContainer className="next-link">
            <span className="button-title">Next</span>
            <span>Next post title is here</span>
          </LinkContainer>
          <img src={IconArrowRight} alt="next" />
        </PostLink>
      </PostNavigation>
    </PostContainer>
  );
};
