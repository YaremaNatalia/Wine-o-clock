import styled from '@emotion/styled';

export const MainWineListSectionStyled = styled.div`
  .sectionTitle {
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }

    @media screen and (min-width: 1440px) {
      font-size: 32px;
    }
  }

  .listNavWrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: 768px) {
      margin-bottom: ${({ theme }) => theme.spacing(8)};
    }

    @media screen and (min-width: 1440px) {
      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
    }
  }

  .arrowWrapper {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(4)};

    @media screen and (min-width: 768px) {
      gap: ${({ theme }) => theme.spacing(5)};
    }

    button {
      width: ${({ theme }) => theme.spacing(8)};
      height: ${({ theme }) => theme.spacing(8)};
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
      padding: ${({ theme }) => theme.spacing(1.5)};
      cursor: pointer;

      margin: 0;

      @media screen and (min-width: 768px) {
        width: ${({ theme }) => theme.spacing(10)};
        height: ${({ theme }) => theme.spacing(10)};
        padding: ${({ theme }) => theme.spacing(2.5)};
      }
    }

    button:disabled svg {
      color: ${({ theme }) => theme.colors.decorativeLightGrey};
      cursor: default;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-column-gap: ${({ theme }) => theme.spacing(1)};
    grid-row-gap: ${({ theme }) => theme.spacing(5)};

    @media screen and (min-width: 768px) {
      grid-column-gap: ${({ theme }) => theme.spacing(3)};
      grid-row-gap: ${({ theme }) => theme.spacing(8)};
    }

    @media screen and (min-width: 1440px) {
      grid-template-columns: repeat(auto-fill, minmax(305px, 1fr));
      grid-row-gap: ${({ theme }) => theme.spacing(12.5)};
    }
  }
`;
