import styled from '@emotion/styled';
import { StyledTrackProps } from './PriceSlider.type';

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
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1.5)};
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

export const StyledTrack = styled.div<StyledTrackProps>`
  top: 0;
  bottom: 0;
  background: ${({ index, theme }) => {
    if (index === 2) {
      return theme?.colors.decorativeLightGrey;
    } else if (index === 1) {
      return theme?.colors.primaryBurgundy;
    } else {
      return theme.colors.decorativeLightGrey;
    }
  }};
`;
