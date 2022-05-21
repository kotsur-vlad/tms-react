import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { postsSelector, setCurrentPostAC } from '../../../../store';
import { IconBookmark } from '../../../../assets';
import { IconButton, LikeButton, Title } from '../../../../common';
import { PostActions, PostContainer, PostPreview, PostText } from './styled';

export const Post: FC = () => {
  const dispatch = useDispatch();
  const { postId } = useParams<{ postId: string }>();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(setCurrentPostAC(Number(postId)));
  }, []);

  return (
    <PostContainer>
      <Title className="post-title-for-children" text={posts.currentPost?.title ?? ''} indent />
      <PostPreview src={posts.currentPost?.image} alt="post-preview" />
      <PostText>{posts.currentPost?.text}</PostText>

      <PostActions>
        <div>
          <LikeButton isLiked={false} />
          <LikeButton isLiked />
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
