import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useEffect, useState } from 'react';
import { StyledHeader } from './Header.styled';
import Container from '@/components/Container';
import { PiBasketBold } from 'react-icons/pi';
import {
  AriaLabels,
  ClassNames,
  PagePaths,
  navLinks,
  privateLinks,
  theme,
} from '@/constants';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import NavLinks from '@/components/NavLinks';
import PrivateLinks from '@/components/PrivateLinks';
import MobileMenu from '@/components/MobileMenu';
import MobileMenuBtn from '@/components/MobileMenuBtn';
import HeaderSearchInput from '../HeaderSearchInput';

const Header = () => {
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(
    window.innerWidth > theme.breakpoints.desktop
  );
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopScreen(window.innerWidth > theme.breakpoints.desktop);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <div className='headerWrapper'>
          <MobileMenuBtn
            showMobileMenu={showMobileMenu}
            onBtnClick={onMobileMenuBtnClick}
          />
          <Link
            to={PagePaths.homePath}
            aria-label={AriaLabels.logo}
            className={ClassNames.logo}
          >
            <Logo />
          </Link>
          <NavLinks navLinks={navLinks} />
          {isDesktopScreen && <HeaderSearchInput />}
          <PrivateLinks navLinks={privateLinks} />
          <Link
            to={PagePaths.basketPath}
            aria-label={AriaLabels.basket}
            className={ClassNames.basket}
          >
            <PiBasketBold />
          </Link>
          {showMobileMenu && (
            <MobileMenu
              onNavLinkClick={onNavLinkClick}
              navLinks={navLinks}
              privateLinks={privateLinks}
            />
          )}
        </div>
        {!isDesktopScreen && <HeaderSearchInput />}
      </Container>
    </StyledHeader>
  );
};

export default Header;
