import styled from 'styled-components';

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  padding: 40px;

  // для потомков
  .post-title-for-children {
    font-weight: 700;
    font-size: 28px;
  }

  // для себя
  &.post-title {
    font-weight: 700;
    font-size: 28px;
  }
`;

export const PostPreview = styled.img``;

export const PostText = styled.div`
  margin: 48px 0;
`;

export const PostActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
