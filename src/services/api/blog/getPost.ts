import { http } from '../..';
import type { PostModel } from '../../../types';

type Response = Omit<PostModel, 'isLiked'>;

export const getPost = (id: number) => {
  return http.get<Response>(`/blog/posts/${id}/`);
};
