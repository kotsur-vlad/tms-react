import axios from 'axios';

import { config } from '../..';
import type { PostModel } from '../../../types';

type GetPostsDTO = {
  author: number;
  lesson_num: number;
  limit: number;
  offset: number;
  ordering: string;
  search: string;
};

type Response = {
  count: number;
  next: string;
  previous: string;
  results: PostModel[];
};

export const getPosts = (queryString?: GetPostsDTO) => {
  return axios.get<Response>('/blog/posts/', { ...config, params: queryString });
};
