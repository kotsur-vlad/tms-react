import { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { allPostsSelector } from '../../store';
import { PostCard } from './components/PostCard';
import { NoPosts, StyledPostsContainer } from './styled';

export const Posts: FC = () => {
  const posts = useSelector(allPostsSelector);

  const memoPostsElements = useMemo(() => {
    return posts?.map((post) => <PostCard key={post.id} post={post} />);
  }, [posts]);

  const hasPosts = !!posts?.length;
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
