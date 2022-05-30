import { FC } from 'react';

import { IconBookmark, ImageDefaultPreview } from '../../../../assets';
import { IconButton, LikeButton } from '../../../../common';
import {
  LikesContainer,
  PostActions,
  PostCardContainer,
  PostDate,
  PostPreview,
  PostTitle,
} from './styled';
import type { PostModel } from '../../../../types';

interface PostCardProps {
  post: PostModel;
  favourite?: boolean;
  liked: boolean;
  onFavsToggle: (id: number) => void;
  onLikeToggle: (id: number, value: boolean) => void;
}

export const PostCard: FC<PostCardProps> = (props) => {
  const { post, favourite = false, liked = false, onFavsToggle, onLikeToggle } = props;

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : ImageDefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle to={`/posts/${post.id}`}>{post.title}</PostTitle>

      <PostActions>
        <LikesContainer>
          <LikeButton onToggleLike={(value) => onLikeToggle(post.id!, value)} liked={liked} />
          <LikeButton
            onToggleLike={(value) => onLikeToggle(post.id!, value)}
            liked={liked}
            type="dislike"
          />
        </LikesContainer>

        <IconButton
          icon={IconBookmark}
          title="Favorites toggle"
          onClick={() => onFavsToggle(post.id!)}
        />
      </PostActions>
    </PostCardContainer>
  );
};
