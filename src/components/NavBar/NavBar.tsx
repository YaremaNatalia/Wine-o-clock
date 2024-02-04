import Logo from '@/icons/logo.svg?react';
import { PagePaths } from '@/constants';
import { Link, NavLink } from 'react-router-dom';
import { FC } from 'react';
import { IProps } from './NavBar.types';

const NavBar: FC<IProps> = ({ navLinks }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={PagePaths.homePath}>
            <Logo />
          </Link>
        </li>
        {navLinks.map(({ href, title }) => (
          <li key={title}>
            <NavLink to={href}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
