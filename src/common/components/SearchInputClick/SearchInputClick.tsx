import { FC, KeyboardEvent } from 'react';
import { useLocation } from 'react-router-dom';

import { getPostsTC, useAppDispatch } from '../../../store';
import { useInputValue } from '../../../utils/hooks/useInputValue';

import { IconSearch } from '../../../assets';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

export const SearchInputClick: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [searchTerm, searchTermHandler] = useInputValue();
  const isPostsPage = location.pathname === '/posts';

  const searchHandler = () => {
    dispatch(getPostsTC({ search: searchTerm }));
  };

  const onEnterSearchHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (searchTerm === '') return;
      dispatch(getPostsTC({ search: searchTerm }));
    }
  };

  return (
    <>
      <Input
        disabled={!isPostsPage}
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={searchTermHandler}
        onKeyDown={onEnterSearchHandler}
      />
      <Button
        disabled={!isPostsPage}
        content={<img src={IconSearch} alt="" />}
        onClick={() => searchHandler()}
      />
    </>
  );
};
