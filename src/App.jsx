import { useState } from 'react';

import { Button, Header } from './common';
import Main from './views/Main';

import { LoginContainer } from './views/Login/LoginContainer';
import Login from './views/Login';
import Register from './views/Register';
import Posts from './views/Posts';
import { Post } from './views/Posts/components/Post/Post';

const App = (props) => {
  const { _theme } = props;

  const [theme, setTheme] = useState('light');
  const [name, setName] = useState('');

  const posts = [
    {
      'id': 1,
      'image': 'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
      'text': 'Posts text...',
      'date': '2021-10-06',
      'lesson_num': 123,
      'title': 'Post text title.....',
      'author': 7,
      'isLiked': true,
    },
    {
      'id': 2,
      'image': 'https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg',
      'text': 'Second post text...',
      'date': '2021-02-10',
      'lesson_num': 123,
      'title': 'Second post title.....',
      'author': 7,
    },
    {
      'id': 3,
      'image': 'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
      'text': 'Third Posts text...',
      'date': '2021-11-22',
      'lesson_num': 123,
      'title': 'Third Post text title.....',
      'author': 7,
    },
  ];

  const submitFormHandler = (event) => { console.log(event); };

  const cancelFormHandler = () => { console.log('Form was cleared'); };

  const changeThemeHandler = () => { setTheme('dark'); };

  return (
    <Main>
      <Header />
      {theme}
      <Button title='Change theme' onClick={changeThemeHandler} />

      <Button title='Submit' onClick={submitFormHandler} />
      <Button title='Cancel' onClick={cancelFormHandler} />

      {/*<Register />*/}
      {/*<Posts posts={posts} />*/}
      <Post
        title={posts[0].title}
        preview={posts[0].image}
        text={posts[0].text}
        isLiked={posts[0].isLiked}
      />
      {/*<LoginContainer />*/}

    </Main>
  );
};

export default App;
