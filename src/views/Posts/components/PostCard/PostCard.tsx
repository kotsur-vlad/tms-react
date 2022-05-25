import { FC } from 'react';

import { PostCardContainer, PostDate, PostPreview, PostTitle } from './styled';
import { ImageDefaultPreview } from '../../../../assets';

import type { PostModel } from '../../../../types';

interface PostCardProps {
  post: PostModel;
  onFavsToggle: (id: number) => void;
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post, onFavsToggle } = props;

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : ImageDefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>

      <button onClick={() => onFavsToggle(post.id)}>favourites toggle</button>
    </PostCardContainer>
  );
};
