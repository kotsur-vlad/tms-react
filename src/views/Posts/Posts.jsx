import { useState } from 'react';

import { NoPosts, StyledPostsContainer } from './styled';
import { PostCard } from './components/PostCard';

export const Posts = (props) => {
  const { posts } = props;

  const [loading, setLoading] = useState('false');

  const postsElements = posts.map((post) => {
    return <PostCard key={post.id} post={post} setLoading={setLoading} loading={loading} />;
  });

  console.log(postsElements);

  const hasPosts = !!posts.length;
  if (hasPosts) {
    return <StyledPostsContainer>{postsElements}</StyledPostsContainer>;
  }

  return <NoPosts>No posts yet...</NoPosts>;

  // Еще способ условного рендеринга для логики на 56-65 строках
  // {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>;}
};
