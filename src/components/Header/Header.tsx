import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useEffect, useState } from 'react';
import { MobileMenuBtn, Navigation, StyledHeader } from './Header.styled';
import Container from '@/components/Container';
import { PiBasketBold, PiListBold, PiXBold } from 'react-icons/pi';
import {
  AriaLabels,
  ClassNames,
  IconSizes,
  PagePaths,
  navLinks,
  privateLinks,
} from '@/constants';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import NavLinks from '@/components/NavLinks';
import PrivateLinks from '@/components/PrivateLinks';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = showMobileMenu ? 'hidden' : 'auto';
  }, [showMobileMenu]);

  const onMobileMenuBtnClick = (e: BtnClickEvent) => {
    setShowMobileMenu((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  const onNavLinkClick = () => {
    setShowMobileMenu(false);
  };

  return (
    <StyledHeader>
      <Container>
        <MobileMenuBtn onClick={onMobileMenuBtnClick}>
          {showMobileMenu ? (
            <PiXBold size={IconSizes.otherSize} />
          ) : (
            <PiListBold size={IconSizes.otherSize} />
          )}
        </MobileMenuBtn>
        <Link
          to={PagePaths.homePath}
          aria-label={AriaLabels.logo}
          className={ClassNames.logo}
        >
          <Logo />
        </Link>
        <NavLinks navLinks={navLinks} />
        <PrivateLinks navLinks={privateLinks} />
        <Link
          to={PagePaths.basketPath}
          aria-label={AriaLabels.basket}
          className={ClassNames.basket}
        >
          <PiBasketBold />
        </Link>
        {showMobileMenu && (
          <Navigation>
            <NavLinks navLinks={navLinks} onNavLinkClick={onNavLinkClick} />
            <PrivateLinks
              navLinks={privateLinks}
              onNavLinkClick={onNavLinkClick}
            />
          </Navigation>
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
