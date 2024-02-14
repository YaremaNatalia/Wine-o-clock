import { theme } from '@/constants';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing(4)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(2)};
    margin-top: ${({ theme }) => theme.spacing(8)};
  }
`;

export const Title = styled.p``;

export const LinksList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(4)};
`;

export const ListItem = styled.li`
  & a {
    display: block;
    padding: ${({ theme }) => theme.spacing(3)};
    border: 1px solid #c6c5b9;
    border-radius: 6px;
  }

  & svg {
    display: block;
  }
`;
