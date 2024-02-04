import { FC } from 'react';
import { PiBasketBold, PiListBold } from 'react-icons/pi';
import NavLinks from '../NavLinks';
import {
  AriaLabels,
  ClassNames,
  PagePaths,
  navLinks,
  privateLinks,
} from '@/constants';
import PrivateLinks from '@/components/PrivateLinks';
import { Link } from 'react-router-dom';
import Logo from '@/icons/logo.svg?react';

const NavBar: FC = () => {
  return (
    <>
      <button>
        <PiListBold />
      </button>
      <Link
        to={PagePaths.homePath}
        aria-label={AriaLabels.logo}
        className={ClassNames.logo}
      >
        <Logo />
      </Link>
      <Link
        to={PagePaths.basketPath}
        aria-label={AriaLabels.basket}
        className={ClassNames.basket}
      >
        <PiBasketBold />
      </Link>
      <NavLinks navLinks={navLinks} />
      <PrivateLinks navLinks={privateLinks} />
    </>
  );
};

export default NavBar;
