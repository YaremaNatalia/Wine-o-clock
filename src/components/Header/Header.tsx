import { BtnClickEvent } from '@/types/types';
import { makeBlur } from '@/utils';
import { useEffect, useState } from 'react';
import { StyledBasketLink, StyledHeader } from './Header.styled';
import Container from '@/components/Container';
import { PiBasketBold } from 'react-icons/pi';
import {
  AriaLabels,
  ClassNames,
  PagePaths,
  navLinks,
  theme,
} from '@/constants';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import NavLinks from '@/components/NavLinks';
import PrivateLinks from '@/components/PrivateLinks';
import MobileMenu from '@/components/MobileMenu';
import MobileMenuBtn from '@/components/MobileMenu/MobileMenuBtn';
import HeaderSearchInput from './HeaderSearchInput';
import { operations } from '@/tanStackQuery';
import usePrivateLinks from '@/hooks/usePrivateLinks';

const Header = () => {
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(
    window.innerWidth > theme.breakpoints.desktop
  );
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [hasBasketWines, setHasBasketWines] = useState<boolean>(false);
  const [hasFavoritesWines, setHasFavoritesWines] = useState<boolean>(false);

  const cartWines = operations.getCartCache();
  const favoritesWines = operations.getFavoritesCache();
  const privateLinks = usePrivateLinks(hasFavoritesWines);

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

  useEffect(() => {
    if (cartWines && cartWines.length > 0) {
      setHasBasketWines(true);
    } else {
      setHasBasketWines(false);
    }
  }, [setHasBasketWines, cartWines]);

  useEffect(() => {
    if (favoritesWines && favoritesWines.length > 0) {
      setHasFavoritesWines(true);
    } else {
      setHasFavoritesWines(false);
    }
  }, [favoritesWines, setHasFavoritesWines]);

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
          <StyledBasketLink
            to={PagePaths.basketPath}
            aria-label={AriaLabels.basket}
            className={ClassNames.basket}
            data-has-wines={hasBasketWines ? 'true' : undefined}
          >
            <PiBasketBold />
          </StyledBasketLink>
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
