import { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { PostCard } from './components/PostCard';
import { NoPosts, StyledPostsContainer } from './styled';

import type { PostModel } from '../../types';

interface PostsProps {
  posts: PostModel[];
}

export const Posts: FC<PostsProps> = (props) => {
  const { posts } = props;

  const memoPostsElements = useMemo(() => {
    return posts.map((post) => <PostCard key={post.id} post={post} />);
  }, [posts]);

  const hasPosts = !!posts.length;
  if (hasPosts) {
    return (
      <StyledPostsContainer>
        {memoPostsElements}

        <Outlet />
      </StyledPostsContainer>
    );
  }

  return <NoPosts>No posts yet...</NoPosts>;

  // Еще способ условного рендеринга для логики на 20-29 строках
  // {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>;}
};
