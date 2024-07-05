import { theme } from '@/constants';
import styled from '@emotion/styled';

export const CheckedFiltersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-self: start;
  align-self: start;
  margin-bottom: ${({ theme }) => theme.spacing(8)};
  gap: ${({ theme }) => theme.spacing(3)};

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

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      padding: ${({ theme }) => theme.spacing(2.5)};
      gap: ${({ theme }) => theme.spacing(2.5)};
      font-size: 14px;
    }
  }
`;

