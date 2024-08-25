import { theme } from '@/constants';
import styled from '@emotion/styled';

export const ConfirmedMessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    padding-bottom: ${({ theme }) => theme.spacing(12.5)};
  }

  h2 {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryBurgundy};
    margin: ${({ theme }) => theme.spacing(8)} 0;
  }

  svg {
    background-color: ${({ theme }) => theme.colors.secondaryGreen};
    color: ${({ theme }) => theme.colors.primaryWhite};
    border-radius: 50%;
    padding: ${({ theme }) => theme.spacing(2)};
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }

  p {
    color: ${({ theme }) => theme.colors.decorativeColor};
    text-align: center;
  }

  .mainInfo {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }

  .secondaryInfo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    p {
      font-size: 14px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    button {
      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        width: 275px;
      }
    }
  }
`;
