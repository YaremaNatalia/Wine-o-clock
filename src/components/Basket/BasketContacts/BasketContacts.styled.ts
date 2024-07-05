import styled from '@emotion/styled';
import { theme } from '@/constants';

export const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)};
  padding: ${({ theme }) => `${theme.spacing(7.5)} ${theme.spacing(4)}`};
  border: 1px solid ${({ theme }) => theme.colors.decorativeLightGrey};
  border-radius: 6px;

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    gap: ${({ theme }) => theme.spacing(12.5)};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}px) {
    flex: 1;
    padding: ${({ theme }) => `${theme.spacing(7.5)} ${theme.spacing(5)}`};
  }

  .titleWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h2 {
      font-size: 16px;
      font-weight: ${({ theme }) => theme.fontWeight.medium};

      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        font-size: 20px;
      }
    }
  }
  .inputsWrapper {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(4)};
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      gap: ${({ theme }) => theme.spacing(7.5)};
      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
    }

    .nameWrapper {
      @media screen and (min-width: ${theme.breakpoints.tablet}px) {
        display: flex;
        flex-direction: row;
        gap: ${({ theme }) => theme.spacing(4)};
      }
    }
  }

  .checkboxWrapper {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
    }
  }
`;

export const Form = styled.form`
  & > input:not(:last-of-type) {
    margin-bottom: ${({ theme }) => theme.spacing(4)};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    & > label:not(:last-of-type) {
      margin-bottom: ${({ theme }) => theme.spacing(7.5)};
    }
  }
`;

export const DeliveryContainer = styled.div`
  & > h2 {
    font-size: 20px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin-bottom: ${({ theme }) => theme.spacing(8)};
  }

  .radioInputs {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(5)};
    margin-bottom: ${({ theme }) => theme.spacing(8)};

    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      margin-bottom: ${({ theme }) => theme.spacing(12.5)};
    }

    label {
      display: flex;
      align-items: center;
      font-size: 16px;
      cursor: pointer;
    }

    input[type='radio'] {
      width: 20px;
      height: 20px;
      appearance: none;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.decorativeLightGrey};
      outline: none;
      margin-right: ${({ theme }) => theme.spacing(5)};
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

    input[type='radio']:checked {
      border-color: ${({ theme }) => theme.colors.primaryBurgundy};
      transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
    }

    input[type='radio']:checked::before {
      background-color: ${({ theme }) => theme.colors.primaryBurgundy};
      transition: background-color
        ${({ theme }) => theme.transitionDurationAndFunc};
    }
  }

  & > p {
    font-size: 14px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};

    span {
      color: ${({ theme }) => theme.colors.primaryBurgundy};
    }
  }
`;

export const PrivacyPolicyContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(10)};

  @media screen and (min-width: ${theme.breakpoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spacing(12.5)};
    gap: ${({ theme }) => theme.spacing(12.5)};
  }

  & > button {
    margin: 0 auto;
    @media screen and (min-width: ${theme.breakpoints.tablet}px) {
      width: 335px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}px) {
      width: 406px;
    }
  }
`;
