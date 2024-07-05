import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputWidth = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): string => {
  const isTabletBreakpoint = breakpoint === theme.breakpoints.tablet;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;
  const isAuthForm = formType === FormTypes.auth;


  if (isSearchForm && isDesktopBreakpoint) {
    return '363px';
  }

  if (isAuthForm && (isTabletBreakpoint || isDesktopBreakpoint)) {
    return '432px';
  }

  if (isAuthForm) {
    return '302px';
  }

  return '100%';
};

export default setInputWidth;
