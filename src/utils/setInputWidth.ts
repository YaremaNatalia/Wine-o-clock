import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputWidth = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): string => {
  const isTabletBreakpoint = breakpoint === theme.breakpoints.tablet;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;
  const isLogInForm = formType === FormTypes.logIn;

  if (isSearchForm && isDesktopBreakpoint) {
    return '363px';
  }

  if (isLogInForm && (isTabletBreakpoint || isDesktopBreakpoint)) {
    return '432px';
  }

  if (isLogInForm) {
    return '302px';
  }

  return '100%';
};

export default setInputWidth;
