import Logo from '@/icons/logo.svg?react';
import { AriaLabels, ClassNames, PagePaths } from '@/constants';
import { Link, NavLink } from 'react-router-dom';
import { FC } from 'react';
import { IProps } from './NavLinks.types';
import { LinksList, ListItem, Nav } from './NavLinks.styled';

const NavLinks: FC<IProps> = ({ navLinks }) => {
  return (
    <Nav>
      <LinksList>
        <ListItem>
          <Link
            to={PagePaths.homePath}
            aria-label={AriaLabels.logo}
            className={ClassNames.logo}
          >
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

export default NavLinks;
