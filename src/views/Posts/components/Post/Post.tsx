import { FC, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { currentPostSelector, setCurrentPostAC, togglePostLikeAC } from '../../../../store';
import { IconBookmark } from '../../../../assets';
import { IconButton, LikeButton, Title } from '../../../../common';
import { PostActions, PostContainer, PostPreview, PostText } from './styled';

export const Post: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();
  const currentPost = useSelector(currentPostSelector);

  useEffect(() => {
    dispatch(setCurrentPostAC(Number(postId)));
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
    </PostContainer>
  );
};
