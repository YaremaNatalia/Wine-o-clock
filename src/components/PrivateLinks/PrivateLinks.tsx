import { Link } from 'react-router-dom';
import { LinksList, ListItem, Title } from './PrivateLinks.styled';
import { IProps } from './PrivateLinks.types';
import { FC } from 'react';

const PrivateLinks: FC<IProps> = ({ navLinks }) => {
  return (
    <LinksList>
      {navLinks.map(({ href, icon: Icon, title, ariaLabel }) => (
        <ListItem key={href}>
          <Link to={href} aria-label={ariaLabel}>
            <Icon />
            <Title>{title}</Title>
          </Link>
        </ListItem>
      ))}
    </LinksList>
  );
};

export default PrivateLinks;
