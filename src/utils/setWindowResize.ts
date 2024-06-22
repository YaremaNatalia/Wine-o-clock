import { useEffect, useState } from 'react';
import { theme } from '@/constants';

const setWindowResize = () => {
  const [screenSize, setScreenSize] = useState({
    isDesktopScreen:
      typeof window !== 'undefined' &&
      window.innerWidth >= theme.breakpoints.desktop,
    isTabletScreen:
      window.innerWidth >= theme.breakpoints.tablet &&
      window.innerWidth < theme.breakpoints.desktop,
    isMobileScreen: window.innerWidth < theme.breakpoints.tablet,
  });

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenSize({
        isDesktopScreen: window.innerWidth >= theme.breakpoints.desktop,
        isTabletScreen:
          window.innerWidth >= theme.breakpoints.tablet &&
          window.innerWidth < theme.breakpoints.desktop,
        isMobileScreen: window.innerWidth < theme.breakpoints.tablet,
      });
    };

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return screenSize;
};

export default setWindowResize;
