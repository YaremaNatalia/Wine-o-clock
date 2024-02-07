import { NavLinks } from '@/types/types';

export interface IProps {
  navLinks: NavLinks;
  onNavLinkClick?: () => void;
}

export interface IStyledProps {
  href: string;
}
