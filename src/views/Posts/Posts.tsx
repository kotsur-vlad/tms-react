import { FC, useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import {
  addPostToFavsAC,
  allPostsSelector,
  favouritesPostsSelector,
  removePostFromFavsAC,
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

  const allPostsElements = useMemo(() => {
    return posts?.map((post) => (
      <PostCard key={post.id} post={post} onFavsToggle={toggleFavouritesHandler} />
    ));
  }, [posts, toggleFavouritesHandler]);

  const favouritesPostsElements = useMemo(() => {
    return favouritesPosts?.map((post) => (
      <PostCard key={post.id} post={post} onFavsToggle={toggleFavouritesHandler} />
    ));
  }, [favouritesPosts, toggleFavouritesHandler]);

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
