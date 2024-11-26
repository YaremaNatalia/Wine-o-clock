import { NavLink } from 'react-router-dom';
import { FC } from 'react';

import { RxDividerVertical } from 'react-icons/rx';
import { LinksList, ListItem, Title } from './PersonalDataLinks.styled';
import { IProps } from './PersonalDataLinks.types';

const PersonalDataLinks: FC<IProps> = ({ navLinks }) => {
  return (
    <LinksList>
      {navLinks.map(({ href, icon: Icon, title, ariaLabel }) => (
        <ListItem key={href}>
          <NavLink to={href} aria-label={ariaLabel}>
            <Icon />
            <Title>{title}</Title>
          </NavLink>
          <RxDividerVertical />
        </ListItem>
      ))}
    </LinksList>
  );
};

export default PersonalDataLinks;
