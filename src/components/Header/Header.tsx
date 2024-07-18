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
  privateLinks,
  theme,
} from '@/constants';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';
import NavLinks from '@/components/NavLinks';
import PrivateLinks from '@/components/PrivateLinks';
import MobileMenu from '@/components/MobileMenu';
import MobileMenuBtn from '@/components/MobileMenu/MobileMenuBtn';
import HeaderSearchInput from './HeaderSearchInput';
import useGetBasket from '@/hooks/useGetBasket';

const Header = () => {
  const [isDesktopScreen, setIsDesktopScreen] = useState<boolean>(
    window.innerWidth > theme.breakpoints.desktop
  );
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [hasWines, setHasWines] = useState<boolean>(false);
  const { data } = useGetBasket();

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
    if (data && data.length > 0) setHasWines(true);
  }, [setHasWines, data]);

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
            data-has-wines={hasWines ? 'true' : undefined}
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
