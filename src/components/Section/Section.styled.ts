import styled from '@emotion/styled';
import { IStyledProps } from './Section.types';

export const StyledSection = styled.section<IStyledProps>`
  padding-top: ${({ paddingTop }) => paddingTop}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom}px;
`;
