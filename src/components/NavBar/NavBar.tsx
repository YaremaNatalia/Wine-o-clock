import Logo from '@/icons/logo.svg?react';
import { ClassNames, PagePaths } from '@/constants';
import { Link, NavLink } from 'react-router-dom';
import { FC } from 'react';
import { IProps } from './NavBar.types';
import { LinksList, ListItem, Nav } from './NavBar.styled';

const NavBar: FC<IProps> = ({ navLinks }) => {
  return (
    <Nav>
      <LinksList>
        <ListItem>
          <Link to={PagePaths.homePath} className={ClassNames.logo}>
            <Logo />
          </Link>
        </ListItem>
        {navLinks.map(({ href, title }) => (
          <ListItem key={title}>
            <NavLink to={href}>{title}</NavLink>
          </ListItem>
        ))}
      </LinksList>
    </Nav>
  );
};

export default NavBar;
