import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  paddingTopMobile?: number;
  paddingBottomMobile?: number;
  paddingTopTablet?: number;
  paddingBottomTablet?: number;
  paddingTopDesktop?: number;
  paddingBottomDesktop?: number;
}

export interface IStyledProps {
  paddingTopMobile?: number;
  paddingBottomMobile?: number;
  paddingTopTablet?: number;
  paddingBottomTablet?: number;
  paddingTopDesktop?: number;
  paddingBottomDesktop?: number;
}
