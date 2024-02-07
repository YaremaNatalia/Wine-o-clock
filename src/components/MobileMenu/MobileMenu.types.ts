import { NavLinks, PrivateLinks } from '@/types/types';

export interface IProps {
  navLinks: NavLinks;
  privateLinks: PrivateLinks;
  onNavLinkClick: () => void;
}
