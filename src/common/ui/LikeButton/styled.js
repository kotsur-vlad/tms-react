import styled from 'styled-components';

export const StyledLikeButton = styled.button`
  width: 88px;
  height: 56px;

  padding: 16px 32px;

  background: #e8e8e8;
  border-radius: 2px;
`;

export const ButtonImage = styled.img`
  &.dislike {
    transform: rotate(180deg);
  }
`;
