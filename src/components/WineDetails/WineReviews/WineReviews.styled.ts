import { theme } from '@/constants';
import styled from '@emotion/styled';

export const WineReviewsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  gap: ${({ theme }) => theme.spacing(3)};
  border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
  border-radius: 16px;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  max-height: 400px;
  overflow-y: auto;

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 20px;
  }
`;

export const Review = styled.div`
  width: 100%;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.decorativeLightGrey};
  padding: ${({ theme }) => theme.spacing(2)};
`;

export const Name = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  gap: ${({ theme }) => theme.spacing(1)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    font-size: 18px;
  }
`;
