import { ButtonImage, StyledLikeButton } from './styled';
import { IconLike } from '../../../assets';

export const LikeButton = (props) => {
  const { dislike, isLiked } = props;

  return (
    <StyledLikeButton>
      <ButtonImage src={IconLike} className={dislike ? 'dislike' : ''} />
      {/*{dislike ? <ButtonImage src={IconDisLike}/> : <ButtonImage src={IconLike}/>}*/}
    </StyledLikeButton>
  );
};
