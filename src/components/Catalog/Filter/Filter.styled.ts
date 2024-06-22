import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(6)};
  justify-content: start;
  align-items: flex-start;

  & > div:nth-of-type(1) {
    @media screen and (min-width: 1440px) {
      display: none;
    }
  }

  @media screen and (min-width: 1440px) {
    width: 325px;
  }
`;

export const FilterItem = styled.div`
  width: 100%;

  .filterTitle {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > svg {
      cursor: pointer;

      &:hover,
      &:focus {
        color: ${({ theme }) => theme.colors.primaryBurgundy};
      }
    }
  }

  @media screen and (min-width: 1440px) {
    width: 208px;
  }
`;

export const FiltersList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  justify-content: center;
  align-items: flex-start;
  padding-top: ${({ theme }) => theme.spacing(6)};

  label {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing(4)};
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    appearance: none;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.decorativeLightGrey};
    outline: none;
    margin-right: 5px;
    position: relative;
    overflow: hidden;
  }

  input[type='checkbox']::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc};
  }

  input[type='checkbox']:checked::before {
    background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  }
`;
