import { NavLinks } from '@/types/types';
import PagePaths from './pagePaths';

const navLinks: NavLinks = [
  { href: PagePaths.storePath, title: 'Store' },
  { href: PagePaths.aboutUsPath, title: 'About Us' },
  { href: PagePaths.wineTimePath, title: 'Wine time' },
  // { href: PagePaths.homePath, title: '' },
];

export default navLinks;
