import styled from '@emotion/styled';

export const SearchResultStyled = styled.div`
  min-height: 100vw;
  display: flex;
  flex-direction: column;
  
`;

export const NoWineFound = styled.h1`
  text-align: center;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.colors.primaryBlack};
 padding: ${({ theme }) => theme.spacing(10)} 0;

  @media screen and (min-width: 1140px) {
    font-size: 18px;
  }

  & span {
    color: ${({ theme }) => theme.colors.primaryBurgundy};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export const SearchResultTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-bottom: ${({ theme }) => theme.spacing(6)};
  color: ${({ theme }) => theme.colors.primaryBlack};
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }

  @media screen and (min-width: 1140px) {
    font-size: 18px;
    margin-bottom: ${({ theme }) => theme.spacing(12.5)};
  }

  & span {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }

  & .searchResult {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media screen and (min-width: 1140px) {
      font-size: 22px;
    }
  }
`;

