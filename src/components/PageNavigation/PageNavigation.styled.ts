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
  padding: 24px 0 0;

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
    font-size: 14px;
    padding: 32px 0 0;
    gap: ${({ theme }) => theme.spacing(2.5)};
  }

  @media screen and (min-width: 1440px) {
    padding: 54px 0 0;
  }
`;
