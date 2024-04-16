import andWineDesk from '@/icons/and-wine-desk.svg?react';
import andWineTab from '@/icons/and-wine-tab.svg?react';
import andWineMob from '@/icons/and-wine-mob.svg?react';

import weLoveLifeDesk from '@/icons/we-love-life-desk.svg?react';
import weLoveLifeTab from '@/icons/we-love-life-tab.svg?react';
import weLoveLifeMob from '@/icons/we-love-life-mob.svg?react';
import wineTimeMob from '@/icons/wine-time-mob.svg?react';
import wineTimeTab from '@/icons/wine-time-tab.svg?react';
import everyHourMob from '@/icons/every-hour-mob.svg?react';
import everyHourTab from '@/icons/every-hour-tab.svg?react';

import { ScreenSize } from '@/types/types';

const setAnimationTopMain = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return weLoveLifeMob;
    case 'tablet':
      return weLoveLifeTab;
    case 'desktop':
      return weLoveLifeDesk;
    default:
      return weLoveLifeMob;
  }
};

const setAnimationBottomMain = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return andWineMob;
    case 'tablet':
      return andWineTab;
    case 'desktop':
      return andWineDesk;
    default:
      return andWineMob;
  }
};

const setAnimationTopWineTime = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return wineTimeMob;
    case 'tablet':
      return wineTimeTab;
    case 'desktop':
      return wineTimeTab;
    default:
      return wineTimeMob;
  }
};

const setAnimationBottomWineTime = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return everyHourMob;
    case 'tablet':
      return everyHourTab;
    case 'desktop':
      return everyHourTab;
    default:
      return everyHourMob;
  }
};

export default {
  setAnimationTopMain,
  setAnimationBottomMain,
  setAnimationTopWineTime,
  setAnimationBottomWineTime,
};
