import { AriaLabels, PagePaths } from '.';
import { FaAdn } from 'react-icons/fa';
import { PrivateLinks } from '@/types/types';

const privateLinks: PrivateLinks = [
  {
    title: 'Log In',
    href: PagePaths.personalDataPath,
    icon: FaAdn,
    ariaLabel: AriaLabels.personalData,
  },
  {
    title: 'Favorites',
    href: PagePaths.favoritesPath,
    icon: FaAdn,
    ariaLabel: AriaLabels.favorites,
  },
  {
    title: '',
    href: PagePaths.basketPath,
    icon: FaAdn,
    ariaLabel: AriaLabels.basket,
  },
];

export default privateLinks;
