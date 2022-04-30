import { useState } from 'react';

import { StyledPostsContainer, NoPosts } from './styled'
import { Post } from './components/Post'

export const Posts = (props) => {

  const [loading, setLoading] = useState('false');

  const posts = [
    {
      "id": 1,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      "text": "Posts text...",
      "date": "2021-10-06",
      "lesson_num": 123,
      "title": "Post text title.....",
      "author": 7
    },
    {
      "id": 2,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg",
      "text": "Second post text...",
      "date": "2021-02-10",
      "lesson_num": 123,
      "title": "Second post title.....",
      "author": 7
    },
    {
      "id": 3,
      "image": "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
      "text": "Third Posts text...",
      "date": "2021-11-22",
      "lesson_num": 123,
      "title": "Third Post text title.....",
      "author": 7
    }
  ];

  const _posts = [];

  const postsElements = posts.map((post) => {
    return (
      <Post
        key={post.id}
        post={post}
        setLoading={setLoading}
        loading={loading}
      />
    );
  });

  console.log(postsElements);


  const hasPosts = !!posts.length
  if (hasPosts) {
    return (
      <StyledPostsContainer>
        {postsElements}
      </StyledPostsContainer>
    );
  }

  return <NoPosts>No posts yet...</NoPosts>


  // Еще способ условного рендеринга для логики на 56-65 строках
  {/* {posts.length !==0 ? postsElements : <NoPosts>No posts yet...</NoPosts> } */ }
}
