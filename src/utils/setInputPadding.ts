import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputPadding = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): string => {
  const isTabletBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;

  if (
    (isSearchForm && isDesktopBreakpoint) ||
    (isSearchForm && isTabletBreakpoint)
  ) {
    return '0 45px 0 20px';
  }

  if (isSearchForm) {
    return '0 32px 0 20px';
  }

  return '0';
};

export default setInputPadding;
