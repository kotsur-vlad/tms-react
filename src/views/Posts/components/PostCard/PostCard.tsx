import { FC } from 'react';

import { PostCardContainer, PostDate, PostPreview, PostTitle } from './styled';
import { ImageDefaultPreview } from '../../../../assets';

import type { PostModel } from '../../../../types';

interface PostCardProps {
  post: PostModel;
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post } = props;

  const addToFavoritesHandler = () => {
    alert('added to favs');
  };

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : ImageDefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>

      <button onClick={addToFavoritesHandler}>add to fav</button>
    </PostCardContainer>
  );
};
