import { FC } from 'react';
import { IProps } from './MobileMenu.types';
import { Navigation } from './MobileMenu.styled';
import NavLinks from '@/components/NavLinks';
import PrivateLinks from '@/components/PrivateLinks';

const MobileMenu: FC<IProps> = ({ onNavLinkClick, navLinks, privateLinks }) => {
  return (
    <Navigation>
      <NavLinks navLinks={navLinks} onNavLinkClick={onNavLinkClick} />
      <PrivateLinks navLinks={privateLinks} onNavLinkClick={onNavLinkClick} />
    </Navigation>
  );
};

export default MobileMenu;
