import { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  addPostToFavsAC,
  allPostsSelector,
  favouritesPostsSelector,
  removePostFromFavsAC,
  togglePostLikeAC,
} from '../../store';
import { PostCard } from './components/PostCard';
import { NoPosts, StyledPostsContainer, Tabs, TabsSwitcher } from './styled';

type Tabs = 'all' | 'favourites';

export const Posts: FC = () => {
  const dispatch = useDispatch();

  const [currentTab, setCurrentTabs] = useState<Tabs>('all');
  const posts = useSelector(allPostsSelector);
  const favouritesPosts = useSelector(favouritesPostsSelector);

  const changeTabHandler = () => {
    if (currentTab === 'all') setCurrentTabs('favourites');
    else setCurrentTabs('all');
  };

  const toggleFavouritesHandler = useCallback(
    (postId: number) => {
      const favsIds = favouritesPosts.map((p) => p.id);
      if (favsIds.includes(postId)) {
        dispatch(removePostFromFavsAC(postId));
      } else {
        dispatch(addPostToFavsAC(postId));
      }
    },
    [favouritesPosts]
  );

  const toggleLikeHandler = useCallback((id, value) => {
    dispatch(togglePostLikeAC({ id, value }));
  }, []);

  const allPostsElements = useMemo(() => {
    return posts?.map((p) => (
      <PostCard
        key={p.id}
        post={p}
        liked={p.isLiked}
        onFavsToggle={toggleFavouritesHandler}
        onLikeToggle={toggleLikeHandler}
      />
    ));
  }, [posts, toggleFavouritesHandler, toggleLikeHandler]);

  const favouritesPostsElements = useMemo(() => {
    return favouritesPosts?.map((p) => (
      <PostCard
        key={p.id}
        post={p}
        liked={p.isLiked}
        onFavsToggle={toggleFavouritesHandler}
        onLikeToggle={toggleLikeHandler}
      />
    ));
  }, [favouritesPosts, toggleFavouritesHandler, toggleLikeHandler]);

  const hasPosts = !!posts?.length;
  if (hasPosts) {
    return (
      <StyledPostsContainer>
        <Tabs>
          <TabsSwitcher onClick={changeTabHandler} className={currentTab === 'all' ? 'active' : ''}>
            All
          </TabsSwitcher>
          <TabsSwitcher
            onClick={changeTabHandler}
            className={currentTab === 'favourites' ? 'active' : ''}
          >
            Favourites
          </TabsSwitcher>
        </Tabs>

        {currentTab === 'all' ? allPostsElements : favouritesPostsElements}

        <Outlet />
      </StyledPostsContainer>
    );
  }

  return <NoPosts>No posts yet...</NoPosts>;

  // Еще способ условного рендеринга для логики на 20-29 строках
  // {posts.length !== 0 ? postsElements : <NoPosts>No posts yet...</NoPosts>;}
};
