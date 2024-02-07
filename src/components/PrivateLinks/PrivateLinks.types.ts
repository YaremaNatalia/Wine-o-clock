import { PrivateLinks } from '@/types/types';

export interface IProps {
  navLinks: PrivateLinks;
  onNavLinkClick?: () => void;
}

export interface IStyledProps {
  href: string;
}
