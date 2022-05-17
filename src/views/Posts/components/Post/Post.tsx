import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IconBookmark } from '../../../../assets';
import { IconButton, LikeButton, Title } from '../../../../common';
import { PostActions, PostContainer, PostPreview, PostText } from './styled';

const postsFromAPI = [
  {
    id: '1',
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
    id: '2',
    image: 'https://tms-studapi-dev.s3.amazonaws.com/media/unnamed_MQSTowL.jpeg',
    text: 'Second post text...',
    date: '2021-02-10',
    lesson_num: 123,
    title: 'Second post title.....',
    author: 7,
  },
  {
    id: '3',
    image:
      'https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png',
    text: 'Third Posts text...',
    date: '2021-11-22',
    lesson_num: 123,
    title: 'Third Post text title.....',
    author: 7,
  },
];

export const Post: FC = () => {
  const { postId } = useParams<{ postId: string }>();

  const [post, setPost] = useState(null);

  const getPost = (id) => {
    const newPost = postsFromAPI.find((p) => p.id === id);
    setPost(newPost);
  };

  useEffect(() => {
    getPost(postId);
  }, []);

  return (
    <PostContainer>
      <Title className="post-title-for-children" text={post?.title} indent />
      <PostPreview src={post?.image} alt="post-preview" />
      <PostText>{post?.text}</PostText>

      <PostActions>
        <div>
          <LikeButton isLiked />
          <LikeButton dislike isLiked />
        </div>

        <IconButton
          icon={IconBookmark}
          title="Add to favorites"
          // onClick={}
        />
      </PostActions>
    </PostContainer>
  );
};
