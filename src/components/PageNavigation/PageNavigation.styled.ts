import styled from '@emotion/styled';

export const PageNavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.colors.secondaryGrey};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing(6)} 0;

  p {
    color: ${({ theme }) => theme.colors.secondaryGrey};
  }

  .currentPageTitle {
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }

  svg {
    @media screen and (min-width: 1440px) {
      width: 18px;
      height: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing(8)} 0;
    font-size: 14px;
    padding: ${({ theme }) => theme.spacing(8)} 0;
    gap: ${({ theme }) => theme.spacing(2.5)};
  }

  @media screen and (min-width: 1440px) {
    padding: ${({ theme }) => theme.spacing(12.5)} 0;
  }
`;
