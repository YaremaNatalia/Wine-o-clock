import styled from '@emotion/styled';

export const WineTimerWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(2)};
  padding-bottom: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  color: ${({ theme }) => theme.colors.primaryWhite};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    gap: ${({ theme }) => theme.spacing(4)};

    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0;
    }
  }

  @media screen and (min-width: 768px) {
    padding-top: ${({ theme }) => theme.spacing(4)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
  }
  @media screen and (min-width: 1440px) {
    font-size: 24px;
    padding-top: ${({ theme }) => theme.spacing(5)};
    padding-bottom: ${({ theme }) => theme.spacing(5)};
  }
`;
