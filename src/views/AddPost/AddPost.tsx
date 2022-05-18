import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { useInputValue } from '../../utils/hooks/useInputValue';
import { AddPostContainer } from './styled';
import { Button, Input, Title } from '../../common';

export const AddPost: FC = () => {
  const navigate = useNavigate();

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
    const postData = {
      title,
      url,
      date,
      image,
      description,
      text,
    };
    console.log('Add post request was sent, with this data:', postData);
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
