import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setInputWidth = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): string => {
  //  const isTabletBreakpoint = breakpoint === Breakpoints.desktop;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;
  const isSearchForm = formType === FormTypes.search;

  if (isSearchForm && isDesktopBreakpoint) {
    return '363px';
  }

  return '100%';
};

export default setInputWidth;
