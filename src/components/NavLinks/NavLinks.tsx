import { NavLink } from 'react-router-dom';
import { FC } from 'react';
import { IProps } from './NavLinks.types';
import { LinksList, ListItem, Nav } from './NavLinks.styled';

const NavLinks: FC<IProps> = ({ navLinks, onNavLinkClick }) => {
  return (
    <Nav>
      <LinksList>
        {navLinks.map(({ href, title }) => (
          <ListItem key={title} href={href}>
            <NavLink to={href} onClick={onNavLinkClick}>
              {title}
            </NavLink>
          </ListItem>
        ))}
      </LinksList>
    </Nav>
  );
};

export default NavLinks;
