import styled from '@emotion/styled';

export const ContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing(6)};

  @media screen and (min-width: 768px) {
    padding-bottom: ${({ theme }) => theme.spacing(9)};
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: ${({ theme }) => theme.spacing(12.5)};
  }

  & > button {
    display: block;
    align-self: center;
    margin-top: ${({ theme }) => theme.spacing(6)};

    @media screen and (min-width: 768px) {
      width: 275px;
      margin-top: ${({ theme }) => theme.spacing(9)} 0;
    }

    @media screen and (min-width: 1440px) {
      margin-top: ${({ theme }) => theme.spacing(12.5)} 0;
    }
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)};

  @media screen and (min-width: 1440px) {
    margin-bottom: ${({ theme }) => theme.spacing(12.5)};
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  svg {
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }

  .filterProducts {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 16px;

    @media screen and (max-width: 1439px) {
      display: none;
    }
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
  font-size: 16px;
  align-items: center;

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ToShameWrapper = styled.div`
  font-size: 16px;

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;

export const SelectPerPageWrapper = styled.div`
  font-size: 13px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;

  & > div:first-of-type {
    @media screen and (max-width: 1439px) {
      display: none;
    }
  }

  .filtersWinesWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;

    .noWineFound {
      height: 100%;
      margin: 0 auto;
      font-size: 18px;
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: ${({ theme }) => theme.colors.primaryBurgundy};
      padding: ${({ theme }) => theme.spacing(15)} 0;
    }
  }

  .chosenFiltersContainer {
    display: flex;
    flex-wrap: wrap;
    justify-self: start;
    align-self: start;
    margin-bottom: ${({ theme }) => theme.spacing(8)};
    gap: ${({ theme }) => theme.spacing(3)};
  }

  button {
    padding: ${({ theme }) => theme.spacing(1.5)};
    border: none;
    border-radius: 39px;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
    font-size: 12px;
    color: ${({ theme }) => theme.colors.primaryBlack};

    &:hover,
    &:focus {
      svg {
        color: ${({ theme }) => theme.colors.primaryBurgundy};
      }
    }

    @media screen and (min-width: 768px) {
      padding: ${({ theme }) => theme.spacing(2.5)};
      gap: ${({ theme }) => theme.spacing(2.5)};
      font-size: 14px;
    }
  }
`;
