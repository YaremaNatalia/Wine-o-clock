import { ButtonDesign, theme } from '@/constants';

const setBtnBgColor = (buttonDesign: ButtonDesign | undefined): string => {
  switch (buttonDesign) {
    case ButtonDesign.burgundy:
      return 'transparent';

    case ButtonDesign.white:
      return 'transparent';

    default:
      return theme.colors.primaryBurgundy;
  }
};

export default setBtnBgColor;
