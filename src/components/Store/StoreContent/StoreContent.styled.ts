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

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(7)};
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: ${({ theme }) => theme.spacing(12.5)};
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  .filterProducts {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: 16px;

    @media screen and (max-width: 1439px) {
      display: none;
    }
  }
`;
export const ToShameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;

  @media screen and (max-width: 1439px) {
    display: none;
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

export const SelectPerPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
