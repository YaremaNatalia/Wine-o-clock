import { theme } from '@/constants';
import styled from '@emotion/styled';

export const EmptyCartStyled = styled.div`
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

  p {
    font-size: 16px;
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.colors.decorativeColor};
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(7)};
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
