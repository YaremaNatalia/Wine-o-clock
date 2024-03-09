import styled from '@emotion/styled';

export const NotFoundStyled = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(15)};

    & > a {
      width: 100%;
      text-align: center;

      & > button {
        margin: auto;
        width: 228px;

        @media screen and (min-width: 768px) {
          width: 297px;
        }

        @media screen and (min-width: 1440px) {
          width: 406px;
        }
      }
    }

    @media screen and (min-width: 768px) {
      gap: ${({ theme }) => theme.spacing(22)};
    }

    @media screen and (min-width: 1440px) {
      gap: ${({ theme }) => theme.spacing(49)};
    }
  }
`;

export const ErrorCode = styled.p`
  color: ${({ theme }) => theme.colors.primaryBurgundy};
  font-size: 115px;

  @media screen and (min-width: 768px) {
    font-size: 150px;
  }

  @media screen and (min-width: 1440px) {
    font-size: 222px;
  }
`;
