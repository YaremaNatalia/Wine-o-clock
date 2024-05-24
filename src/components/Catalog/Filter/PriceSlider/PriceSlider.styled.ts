import styled from '@emotion/styled';

export const SliderWrapper = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)};
  width: 100%;
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  .labelsWrapper {
    width: 100%;
    display: flex;

    input {
      width: 100%;
      border: none;
    }
  }

  .inputWrapper {
    width: 100%;
    display: flex;
    gap: ${({ theme }) => theme.spacing(2)};
  }

  .slider {
    position: relative;
    height: 5px;
    width: 100%;
    border-radius: 5px;
    margin-top: 15px;
  }

  .slider .thumb {
    position: absolute;
    top: -5.5px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primaryBurgundy};
    cursor: pointer;
  }

  .slider .thumb:focus {
    outline: none;
  }
`;

export const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) => {
    if (props.index === 2) {
      return props.theme.colors.decorativeLightGrey;
    } else if (props.index === 1) {
      return props.theme.colors.primaryBurgundy;
    } else {
      return props.theme.colors.decorativeLightGrey;
    }
  }};
`;
