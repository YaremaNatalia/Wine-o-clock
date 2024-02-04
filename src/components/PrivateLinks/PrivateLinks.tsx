import { ClassNames, PagePaths } from '@/constants';
import { IconType } from 'react-icons';
import { FaAdn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { LinksList, ListItem, Title } from './PrivateLinks.types';

const navLinks: {
  title: string;
  href: PagePaths;
  icon: IconType;
}[] = [
  { title: 'Log In', href: PagePaths.personalDataPath, icon: FaAdn },
  { title: 'Favorites', href: PagePaths.favoritesPath, icon: FaAdn },
  { title: '', href: PagePaths.basketPath, icon: FaAdn },
];

const PrivateLinks = () => {
  return (
    <LinksList>
      {navLinks.map(({ href, icon: Icon, title }) => {
        const isBasketLink = href === PagePaths.basketPath;

        return (
          <ListItem>
            <Link to={href} className={isBasketLink ? ClassNames.basket : ''}>
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
