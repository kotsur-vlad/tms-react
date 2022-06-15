import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, Location } from 'react-router-dom';
import debounce from 'lodash.debounce';

import { getPostsTC, postsStateSelector, useAppDispatch } from '../../../store';

import { IconSearch } from '../../../assets';
import { Input } from '../../ui/Input';
import { Button } from '../../ui/Button';

interface LocationStateProps {
  from: Location;
}

export const SearchInputDebounce: FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { loading: isLoading } = useSelector(postsStateSelector);
  const [searchInputShown, setSearchInputShown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isSearchPage = location.pathname === '/search';

  useEffect(() => {
    if (isSearchPage) {
      setSearchInputShown(true);
      inputRef.current?.focus();
    } else if (!isSearchPage) {
      setSearchInputShown(false);
    }
  }, [isSearchPage]);

  const searchTermValueHandler = debounce((value: string) => {
    dispatch(getPostsTC({ search: value }));
  }, 500);

  const inputVisibilityHandler = () => {
    if (searchInputShown) {
      setSearchInputShown(false);
      const pathToRedirect = (location.state as LocationStateProps)?.from?.pathname || '/';
      navigate(pathToRedirect);
      return;
    }

    if (!searchInputShown) {
      setSearchInputShown(true);
      navigate('search', { state: { from: location } });
      return;
    }
  };

  return (
    <>
      {searchInputShown && (
        <Input
          ref={inputRef}
          disabled={isLoading}
          type="text"
          placeholder="Search..."
          onInput={(e: ChangeEvent<HTMLInputElement>) => searchTermValueHandler(e.target.value)}
        />
      )}
      <Button content={<img src={IconSearch} alt="" />} onClick={() => inputVisibilityHandler()} />
    </>
  );
};
