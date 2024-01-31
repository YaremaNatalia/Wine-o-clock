import { FC } from 'react';
import { IProps } from './Section.types';
import { StyledSection } from './Section.styled';

const Section: FC<IProps> = ({
  children,
  paddingTopMobile,
  paddingBottomMobile,
  paddingTopTablet,
  paddingBottomTablet,
  paddingTopDesktop,
  paddingBottomDesktop,
}) => (
  <StyledSection
    paddingTopMobile={paddingTopMobile}
    paddingBottomMobile={paddingBottomMobile}
    paddingTopTablet={paddingTopTablet}
    paddingBottomTablet={paddingBottomTablet}
    paddingTopDesktop={paddingTopDesktop}
    paddingBottomDesktop={paddingBottomDesktop}
  >
    {children}
  </StyledSection>
);

export default Section;
