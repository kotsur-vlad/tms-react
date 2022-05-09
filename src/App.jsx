import { useEffect, useState } from 'react';

import { Button, Footer, Header } from './common';
import Main from './views/Main';

import { LoginContainer } from './views/Login/LoginContainer';
import Login from './views/Login';
import Register from './views/Register';
import Posts from './views/Posts';
import { Post } from './views/Posts/components/Post/Post';
import { ResetPassword } from './views/ResetPassword/ResetPassword';

const postsFromAPI = [
  {
    id: 1,
    image:
      'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
    text: 'Posts text...',
    date: '2021-10-06',
    lesson_num: 123,
    title: 'Post text title.....',
    author: 7,
    isLiked: true,
  },
  {
    id: 2,
    image: 'https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg',
    text: 'Second post text...',
    date: '2021-02-10',
    lesson_num: 123,
    title: 'Second post title.....',
    author: 7,
  },
  {
    id: 3,
    image:
      'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
    text: 'Third Posts text...',
    date: '2021-11-22',
    lesson_num: 123,
    title: 'Third Post text title.....',
    author: 7,
  },
];

const userInfoFromAPI = {
  id: '1',
  username: 'Ivan Ivanov',
  email: 'ivan@mail.ru',
};

const App = () => {
  const [loading, setLoading] = useState('false');
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  // const [fetch, setFetch] = useState(false);

  //
  // Пустой массив зависимостей - сработает только 1 раз при 1-м рендере
  useEffect(() => {
    if ('success request posts') {
      setPosts(postsFromAPI);
    }

    if ('success request userInfo') {
      setUserInfo(userInfoFromAPI);
    }
  }, []);

  //
  // Есть массив зависимостей - сработает при 1-м рендере и
  // при каждом изменении переменных из массива зависимостей
  // useEffect(() => {
  //   ...some code
  // }, [variable, secondVar]);

  //
  // Нет массива зависимостей - сработает при 1-м рендере и при каждой перерисовке компоненты
  // useEffect(() => {
  //   ...some code
  // });

  //
  // Есть функция "очистки", которая выполнится при размонтировании компонента
  // useEffect(() => {
  //   ...some code
  //
  //   return () => {
  //     ...some cleanup code
  //   }
  // });
  //

  // const fetchPostsHandler = () => {
  //   setFetch((prevState) => !prevState);
  // };

  return (
    <Main>
      <Header userInfo={userInfo} />
      {/* <Button title="Fetch posts" onClick={fetchPostsHandler} /> */}

      <ResetPassword />

      <Register />
      {/* <Posts posts={posts} loading={loading} setLoading={setLoading} /> */}
      {/* <Post */}
      {/*   title={posts[0]?.title} */}
      {/*   preview={posts[0]?.image} */}
      {/*   text={posts[0]?.text} */}
      {/*   isLiked={posts[0]?.isLiked} */}
      {/* /> */}

      <LoginContainer />
      <Footer />
    </Main>
  );
};

export default App;
