import { PrivateLinks } from '@/types/types';

export interface IProps {
  navLinks: PrivateLinks;
  onNavLinkClick?: () => void;
  basket?: boolean;
}

export interface IStyledProps {
  href: string;
  basket?: boolean;
}
