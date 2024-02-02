import { ButtonDesign, theme } from '@/constants';

const setBtnBorderColor = (buttonDesign: ButtonDesign | undefined): string => {
  switch (buttonDesign) {
    case ButtonDesign.burgundy:
      return theme.colors.primaryBurgundy;

    case ButtonDesign.white:
      return theme.colors.primaryWhite;

    default:
      return 'transparent';
  }
};

export default setBtnBorderColor;
