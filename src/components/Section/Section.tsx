import { FC } from 'react';
import { IProps } from './Section.types';
import { theme } from '@/constants';
import { StyledSection } from './Section.styled';

const Section: FC<IProps> = ({
  children,
  paddingTop = theme.padding.sectionPadding,
  paddingBottom = theme.padding.sectionPadding,
}) => (
  <StyledSection paddingTop={paddingTop} paddingBottom={paddingBottom}>
    {children}
  </StyledSection>
);

export default Section;
