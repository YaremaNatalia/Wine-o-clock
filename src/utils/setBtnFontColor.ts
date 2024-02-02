import { ButtonDesign, theme } from '@/constants';

const setBtnFontColor = (buttonDesign: ButtonDesign | undefined): string => {
  switch (buttonDesign) {
    case ButtonDesign.burgundy:
      return theme.colors.primaryBurgundy;

    case ButtonDesign.white:
      return theme.colors.primaryWhite;

    default:
      return theme.colors.primaryWhite;
  }
};

export default setBtnFontColor;
