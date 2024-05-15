import styled from '@emotion/styled';

export const WineTimeDescriptionStyled = styled.div`
  color: ${({ theme }) => theme.colors.primaryBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 14px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .subtitle {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
    text-align: center;

    @media screen and (min-width: 1440px) {
      margin-bottom: ${({ theme }) => theme.spacing(10)};
    }
  }
`;

export const DescriptionTitle = styled.h2`
  text-transform: uppercase;
  font-size: 20px;
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: 1440px) {
    font-size: 32px;
    margin-bottom: ${({ theme }) => theme.spacing(9)};
  }
`;

export const WineTimeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(153px, 1fr));
  gap: ${({ theme }) => theme.spacing(5)};
  text-align: center;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(307px, 1fr));
    gap: ${({ theme }) => theme.spacing(3)};
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: ${({ theme }) => theme.spacing(2)};

    @media screen and (min-width: 1440px) {
      gap: 0;
    }
  }

  h3 {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};

    @media screen and (min-width: 1440px) {
      font-size: 20px;
    }
  }

  svg {
    @media screen and (min-width: 1440px) {
      width: 80px;
      height: 80px;
      margin-bottom: ${({ theme }) => theme.spacing(5)};
    }
  }
`;
