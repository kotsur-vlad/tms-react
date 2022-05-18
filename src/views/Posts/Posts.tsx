import { FC, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { getPostsAC } from '../../store/actions';
import { postsSelector } from '../../store/selectors';
import { PostCard } from './components/PostCard';
import { NoPosts, StyledPostsContainer } from './styled';
// импорт стора из корня приложения - не из редакса
import { _store } from '../../AppRoot';

export const Posts: FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsSelector);

  useEffect(() => {
    dispatch(getPostsAC(_store.posts));

    // типичные ошибки при с dispatch:
    // dispatch(getPostsAC);
    // getPostsAC('value');
  }, []);

  const memoPostsElements = useMemo(() => {
    return posts.posts?.map((post) => <PostCard key={post.id} post={post} />);
  }, [posts.posts]);

  const hasPosts = !!posts.posts?.length;
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
