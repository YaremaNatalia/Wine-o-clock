import { AriaLabels, PagePaths } from '../constants';
import { PiUserBold, PiHeartBold, PiHeartFill } from 'react-icons/pi';
import { PrivateLinks } from '@/types/types';

const getPrivateLinks = (hasFavoritesWines?: boolean): PrivateLinks => [
  {
    title: 'Favorites',
    href: PagePaths.favoritesPath,
    icon: hasFavoritesWines ? PiHeartFill : PiHeartBold,
    ariaLabel: AriaLabels.favorites,
  },
  {
    title: 'Log In',
    href: PagePaths.personalDataPath,
    icon: PiUserBold,
    ariaLabel: AriaLabels.personalData,
  },
];

export default getPrivateLinks;
