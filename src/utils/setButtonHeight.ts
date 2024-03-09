import { theme } from '@/constants';
import ButtonForms from '@/constants/buttonForms';
import { ISetButtonStyleProps } from '@/types/types';

const setButtonHeight = ({
  buttonForm,
  breakpoint,
}: ISetButtonStyleProps): number => {
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isOtherButton = buttonForm === ButtonForms.other;

  if (isDesktopBreakpoint && !isOtherButton) {
    return 60;
  }

  return 48;
};

export default setButtonHeight;
