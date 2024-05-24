import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 325px;
  gap: ${({ theme }) => theme.spacing(6)};
  justify-content: start;
  align-items: flex-start;
`;

export const FilterItem = styled.div`
  width: 208px;

  .filterTitle {
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

  input[type='radio'] {
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

  input[type='radio']::before {
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

  input[type='radio']:checked::before {
    background-color: ${({ theme }) => theme.colors.primaryBurgundy};
  }
`;


