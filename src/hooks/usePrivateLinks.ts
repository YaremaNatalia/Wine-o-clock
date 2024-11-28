import useGetUser from '@/hooks/useGetUser';
import { PrivateLinks } from '@/types/types';
import { AriaLabels, PagePaths } from '../constants';
import { PiUserBold, PiHeartBold, PiHeartFill } from 'react-icons/pi';

const usePrivateLinks = (hasFavoritesWines?: boolean): PrivateLinks => {
  const { user } = useGetUser(); 

  return [
    {
      title: 'Favorites',
      href: PagePaths.favoritesPath,
      icon: hasFavoritesWines ? PiHeartFill : PiHeartBold,
      ariaLabel: AriaLabels.favorites,
    },
    {
      title: user?.firstName || 'Log In',
      href: PagePaths.personalDataPath,
      icon: PiUserBold,
      ariaLabel: AriaLabels.personalData,
    },
  ];
};

export default usePrivateLinks;
