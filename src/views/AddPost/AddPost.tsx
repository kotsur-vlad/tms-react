import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addPostsTC, useAppDispatch, userInfoSelector } from '../../store';
import { useInputValue } from '../../utils/hooks/useInputValue';

import { Button, Input, Title } from '../../common';
import { AddPostContainer } from './styled';
import type { PostModel } from '../../types';

export const AddPost: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector(userInfoSelector);
  const userId = userInfo?.id;

  const [title, titleHandler] = useInputValue();
  const [url, urlHandler] = useInputValue();
  const [date, dateHandler] = useInputValue();
  const [image, imageHandler] = useInputValue();
  const [description, descriptionHandler] = useInputValue();
  const [text, textHandler] = useInputValue();

  const deleteHandler = () => {
    alert('post deleted');
  };

  const cancelHandler = () => {
    navigate('/');
  };

  const addHandler = () => {
    if (title.length === 0) return;
    if (date.length === 0) return;

    const postData: PostModel = {
      id: Math.floor(Math.random() * 1000),
      date,
      image,
      title,
      author: userId!,
      text,
      lesson_num: 44,
      isLiked: false,
    };

    dispatch(addPostsTC(postData));
  };

  return (
    <AddPostContainer>
      <Title text="Add post" indent />

      <Input type="text" placeholder="Title" value={title} onChange={titleHandler} />
      <Input type="text" placeholder="URL" value={url} onChange={urlHandler} />
      <Input type="text" placeholder="Publish date" value={date} onChange={dateHandler} />
      <Input type="text" placeholder="Choose image" value={image} onChange={imageHandler} />
      <Input
        type="text"
        placeholder="Add your text"
        value={description}
        onChange={descriptionHandler}
      />
      <Input type="text" placeholder="Add your text" value={text} onChange={textHandler} />

      <Button title="Delete post" onClick={deleteHandler} />
      <Button title="Cancel" onClick={cancelHandler} />
      <Button title="Add post" onClick={addHandler} />
    </AddPostContainer>
  );
};
