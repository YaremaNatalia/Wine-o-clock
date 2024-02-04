import { ClassNames, PagePaths } from '@/constants';
import { Link } from 'react-router-dom';
import { LinksList, ListItem, Title } from './PrivateLinks.styled';
import { IProps } from './PrivateLinks.types';
import { FC } from 'react';

const PrivateLinks: FC<IProps> = ({ navLinks }) => {
  return (
    <LinksList>
      {navLinks.map(({ href, icon: Icon, title, ariaLabel }) => {
        const isBasketLink = href === PagePaths.basketPath;

        return (
          <ListItem key={href}>
            <Link
              to={href}
              aria-label={ariaLabel}
              className={isBasketLink ? ClassNames.basket : ''}
            >
              {title ? (
                <>
                  <Icon />
                  <Title>{title}</Title>
                </>
              ) : (
                <Icon />
              )}
            </Link>
          </ListItem>
        );
      })}
    </LinksList>
  );
};

export default PrivateLinks;
