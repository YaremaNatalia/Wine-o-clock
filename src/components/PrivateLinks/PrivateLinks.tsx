import { NavLink } from 'react-router-dom';
import { LinksList, ListItem, Title } from './PrivateLinks.styled';
import { IProps } from './PrivateLinks.types';
import { FC } from 'react';

const PrivateLinks: FC<IProps> = ({ navLinks, onNavLinkClick, basket }) => {
  return (
    <LinksList basket={basket}>
      {navLinks.map(({ href, icon: Icon, title, ariaLabel }) => (
        <ListItem key={href} href={href} basket={basket}>
          <NavLink to={href} aria-label={ariaLabel} onClick={onNavLinkClick}>
            <Icon />
            <Title>{title}</Title>
          </NavLink>
        </ListItem>
      ))}
    </LinksList>
  );
};

export default PrivateLinks;
