import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputPadding = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): string => {
  const isTabletBreakpoint = breakpoint === theme.breakpoints.tablet;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;
  const isRegisterForm = formType === FormTypes.register;
  const isLogInForm = formType === FormTypes.logIn;

  if (
    (isSearchForm && isDesktopBreakpoint) ||
    (isSearchForm && isTabletBreakpoint)
  ) {
    return '0 45px 0 20px';
  }

  if (isSearchForm) {
    return '0 32px 0 20px';
  }

  if (
    (isRegisterForm && isDesktopBreakpoint) ||
    (isRegisterForm && isTabletBreakpoint)
  ) {
    return '0 16px 0 16px';
  }

  if (isRegisterForm || isLogInForm) {
    return '0 19px 0 19px';
  }

  return '0';
};

export default setInputPadding;
