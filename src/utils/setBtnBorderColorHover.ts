import { ButtonDesign, theme } from '@/constants';

const setBtnBorderColorHover = (
  buttonDesign: ButtonDesign | undefined
): string => {
  switch (buttonDesign) {
    case ButtonDesign.burgundy:
      return theme.colors.primaryAccentColor;

    case ButtonDesign.white:
      return theme.colors.decorativeColor;

    default:
      return 'transparent';
  }
};

export default setBtnBorderColorHover;
