import type { PostModel } from '../../types';

export const mapPostsIntoView = (posts: PostModel[]) => {
  return posts.map((p) => ({ ...p, isLiked: null }));
};
