import { PostCard, PostDate, PostPreview, PostTitle } from './styled';
import { ImageDefaultPreview } from './../../../../assets';

export const Post = (props) => {
  const { post, setLoading, loading } = props;

  const addToFavoritesHandler = () => {
    setLoading(!loading);
  };

  return (
    <PostCard>
      <PostPreview src={post.image ? post.image : ImageDefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle>{post.title}</PostTitle>

      <button onClick={addToFavoritesHandler}>add to fav</button>
    </PostCard>
  );
};
