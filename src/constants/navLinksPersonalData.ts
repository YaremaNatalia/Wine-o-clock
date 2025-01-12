import { IPrivateLink } from '@/types/types';
import PagePaths from './pagePaths';
import { FaRegFolderOpen } from 'react-icons/fa';
import { BiMessageDots } from 'react-icons/bi';
import AriaLabels from './ariaLabels';

const navLinksPersonalData: IPrivateLink[] = [
  {
    title: 'My orders',
    href: PagePaths.homePath,
    icon: FaRegFolderOpen,
    ariaLabel: AriaLabels.myOrders,
  },
  {
    title: 'My reviews',
    href: PagePaths.homePath,
    icon: BiMessageDots,
    ariaLabel: AriaLabels.myReviews,
  },
];

export default navLinksPersonalData;
