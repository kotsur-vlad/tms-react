import { useMemo, useState } from 'react';

import { NoPosts, StyledPostsContainer } from './styled';
import { PostCard } from './components/PostCard';

export const Posts = (props) => {
  const { posts, loading, setLoading } = props;
  console.log(posts);

  const postsElements = posts.map((post) => {
    return <PostCard key={post.id} post={post} setLoading={setLoading} loading={loading} />;
  });

  const memoPostsElements = useMemo(() => {
    return posts.map((post) => (
      <PostCard key={post.id} post={post} setLoading={setLoading} loading={loading} />
    ));
  }, [posts]);

  const hasPosts = !!posts.length;
  if (hasPosts) {
    return <StyledPostsContainer>{memoPostsElements}</StyledPostsContainer>;
  }

  return <NoPosts>No posts yet...</NoPosts>;

  // Еще способ условного рендеринга для логики на 56-65 строках
  // {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>;}
};
