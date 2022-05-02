import { PostCardContainer, PostDate, PostPreview, PostTitle } from './styled';
import { ImageDefaultPreview } from './../../../../assets';

export const PostCard = (props) => {
  const { post, setLoading, loading } = props;

  const addToFavoritesHandler = () => {
    setLoading(!loading);
  };

  return (
    <PostCardContainer>
      <PostPreview src={post.image ? post.image : ImageDefaultPreview} />
      <PostDate>{post.date}</PostDate>
      <PostTitle>{post.title}</PostTitle>

      <button onClick={addToFavoritesHandler}>add to fav</button>
    </PostCardContainer>
  );
};
