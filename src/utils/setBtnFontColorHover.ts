import { ButtonDesign, theme } from '@/constants';

const setBtnFontColorHover = (
  buttonDesign: ButtonDesign | undefined
): string => {
  switch (buttonDesign) {
    case ButtonDesign.burgundy:
      return theme.colors.primaryAccentColor;

    case ButtonDesign.white:
      return theme.colors.decorativeColor;

    default:
      return theme.colors.primaryWhite;
  }
};

export default setBtnFontColorHover;
