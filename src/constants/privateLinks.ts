import { AriaLabels, PagePaths } from '.';
import { PiUserBold, PiHeartBold } from 'react-icons/pi';
import { PrivateLinks } from '@/types/types';

const privateLinks: PrivateLinks = [
  {
    title: 'Favorites',
    href: PagePaths.favoritesPath,
    icon: PiHeartBold,
    ariaLabel: AriaLabels.favorites,
  },
  {
    title: 'Log In',
    href: PagePaths.personalDataPath,
    icon: PiUserBold,
    ariaLabel: AriaLabels.personalData,
  },
];

export default privateLinks;
