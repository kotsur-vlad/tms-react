import { PostActions, PostContainer, PostPreview, PostText } from './styled';
import { IconButton, LikeButton } from '../../../../common';
import { IconBookmark } from '../../../../assets';

export const Post = (props) => {
  const { title, preview, text, isLiked } = props;

  return (
    <PostContainer>
      <span className="post-title-for-children">{title}</span>
      <PostPreview src={preview} alt="post-preview" />
      <PostText>{text}</PostText>

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
