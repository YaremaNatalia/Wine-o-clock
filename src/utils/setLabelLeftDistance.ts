import { FormTypes, theme } from '@/constants';
import { ISetInputStyleProps } from '@/types/types';

const setLabelLeftDistance = ({
  formType,
  breakpoint,
}: ISetInputStyleProps): string => {
  const isRegisterForm = formType === FormTypes.register;
  const isTabletBreakpoint = breakpoint === theme.breakpoints.tablet;
  const isDesktopBreakpoint = breakpoint === theme.breakpoints.desktop;

  if (
    (isRegisterForm && isDesktopBreakpoint) ||
    (isRegisterForm && isTabletBreakpoint)
  ) {
    return '16px';
  }

  return '19px';
};

export default setLabelLeftDistance;
