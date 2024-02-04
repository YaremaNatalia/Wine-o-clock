import { PagePaths } from '@/constants';
import { IconType } from 'react-icons';
import { FaAdn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
    <ul>
      {navLinks.map(({ href, icon: LinkIcon, title }) => (
        <li>
          <Link to={href}>
            {title ? (
              <>
                <LinkIcon />
                <span>{title}</span>
              </>
            ) : (
              <LinkIcon />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default PrivateLinks;
