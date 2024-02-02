import { ButtonDesign, theme } from '@/constants';

const setBtnBgColorHover = (buttonDesign: ButtonDesign | undefined): string => {
  switch (buttonDesign) {
    case ButtonDesign.burgundy:
      return 'transparent';

    case ButtonDesign.white:
      return 'transparent';

    default:
      return theme.colors.primaryAccentColor;
  }
};

export default setBtnBgColorHover;
