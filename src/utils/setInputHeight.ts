import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputHeight = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): number => {
  const isTabletBreakpoint = breakpoint === theme.breakpoints.tablet;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;
  const isConfirmOrderForm = formType === FormTypes.confirmOrder;

  if (
    (isConfirmOrderForm && isDesktopBreakpoint) ||
    (isConfirmOrderForm && isTabletBreakpoint)
  ) {
    return 50;
  }

  if (isConfirmOrderForm) {
    return 55;
  }
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
