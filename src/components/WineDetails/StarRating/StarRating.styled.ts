import styled from '@emotion/styled';

export const StarRatingStyled = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 20px;

  @media screen and (min-width: 1440px) {
    font-size: 28px;
  }
`;
export const RatingBody = styled.div`
  position: relative;
  border: 1px;

  &::before {
    content: '★★★★★';
    display: block;
    color: transparent;
    -webkit-text-stroke: 0.5px ${({ theme }) => theme.colors.starBorderColor};
  }
`;
export const RatingActive = styled.div`
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  &::before {
    content: '★★★★★';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.colors.starColor};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const RatingItems = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  & input {
    flex: 0 0 20%;
    height: 100%;
    opacity: 0;
  }
`;
