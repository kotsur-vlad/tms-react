import { PostCard, PostPreview, PostDate, PostTitle } from './styled';

export const Post = (props) => {
  const { post, setLoading, loading } = props;

  const addToFavoritesHandler = () => {
    setLoading(!loading)
  }

  return (
    <PostCard>
      <PostPreview src={post.image} />
      <PostDate>{post.date}</PostDate>
      <PostTitle>{post.title}</PostTitle>

      <button onClick={addToFavoritesHandler}>add to fav</button>
    </PostCard>
  );
};
