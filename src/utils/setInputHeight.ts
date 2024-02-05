import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputHeight = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): number => {
  const isTabletBreakpoint = breakpoint === theme.breakpoints.tablet;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;

  if (
    (isSearchForm && isDesktopBreakpoint) ||
    (isSearchForm && isTabletBreakpoint)
  ) {
    return 45;
  }

  if (isSearchForm) {
    return 32;
  }

  return 48;
};

export default setInputHeight;
