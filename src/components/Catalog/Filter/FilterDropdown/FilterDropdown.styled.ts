import styled from '@emotion/styled';

export const DropdownFilter = styled.div`
  position: relative;
`;

export const DropdownNavigation = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 300px;
  }

  & > svg {
    cursor: pointer;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }
  .valueWrapper {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(3)};
  }

  .selectedValue {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.decorativeColor};
  }
`;

export const List = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3.5)};
  padding: ${({ theme }) => theme.spacing(2.5)};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.decorativeColor};
  background-color: ${({ theme }) => theme.colors.primaryWhite};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  border-radius: 9px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;
export const Option = styled.li`
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primaryBurgundy};
  }
`;
