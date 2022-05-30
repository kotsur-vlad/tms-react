import styled from 'styled-components';

export const StyledLikeButton = styled.button`
  width: 88px;
  height: 56px;

  padding: 16px 32px;

  background: #e8e8e8;
  border-radius: 2px;

  &.active {
    background: #eedb7b;
  }
`;

export const LikeImage = styled.img``;

export const DislikeImage = styled.img`
  transform: rotate(180deg);
`;
