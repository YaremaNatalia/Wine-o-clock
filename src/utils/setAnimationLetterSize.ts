import andWineDesk from '@/icons/and-wine-desk.svg?react';
import andWineTab from '@/icons/and-wine-tab.svg?react';
import andWineMob from '@/icons/and-wine-mob.svg?react';

import weLoveLifeDesk from '@/icons/we-love-life-desk.svg?react';
import weLoveLifeTab from '@/icons/we-love-life-tab.svg?react';
import weLoveLifeMob from '@/icons/we-love-life-mob.svg?react';
import wineTimeDesk from '@/icons/wine-time-desk.svg?react';
import wineTimeTab from '@/icons/wine-time-tab.svg?react';
import wineTimeMob from '@/icons/wine-time-mob.svg?react';
import everyHourDesk from '@/icons/every-hour-desk.svg?react';
import everyHourTab from '@/icons/every-hour-tab.svg?react';
import everyHourMob from '@/icons/every-hour-mob.svg?react';

import wineTimeRedDesk from '@/icons/wine-time-red-desk.svg?react';
import wineTimeRedTab from '@/icons/wine-time-red-tab.svg?react';
import wineTimeRedMob from '@/icons/wine-time-red-mob.svg?react';

import everyHourRedDesk from '@/icons/every-hour-red-desk.svg?react';
import everyHourRedTab from '@/icons/every-hour-red-tab.svg?react';
import everyHourRedMob from '@/icons/every-hour-red-mob.svg?react';

import aPlaceDesk from '@/icons/a-place-desk.svg?react';
import aPlaceTab from '@/icons/a-place-tab.svg?react';
import aPlaceMob from '@/icons/a-place-mob.svg?react';

import forGoodWineDesk from '@/icons/for-good-wine-desk.svg?react';
import forGoodWineTab from '@/icons/for-good-wine-tab.svg?react';
import forGoodWineMob from '@/icons/for-good-wine-mob.svg?react';

import { ScreenSize } from '@/types/types';

const setTopTextMain = (screenSize: ScreenSize) => {
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

const setBottomTextMain = (screenSize: ScreenSize) => {
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

const setTopTextWineTime = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return wineTimeMob;
    case 'tablet':
      return wineTimeTab;
    case 'desktop':
      return wineTimeDesk;
    default:
      return wineTimeMob;
  }
};

const setBottomTextWineTime = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return everyHourMob;
    case 'tablet':
      return everyHourTab;
    case 'desktop':
      return everyHourDesk;
    default:
      return everyHourMob;
  }
};

const setTopTextAboutUs = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return wineTimeRedMob;
    case 'tablet':
      return wineTimeRedTab;
    case 'desktop':
      return wineTimeRedDesk;
    default:
      return wineTimeRedMob;
  }
};

const setBottomTextAboutUs = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return everyHourRedMob;
    case 'tablet':
      return everyHourRedTab;
    case 'desktop':
      return everyHourRedDesk;
    default:
      return everyHourRedMob;
  }
};

const setTopTextCatalog = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return aPlaceMob;
    case 'tablet':
      return aPlaceTab;
    case 'desktop':
      return aPlaceDesk;
    default:
      return aPlaceMob;
  }
};

const setBottomTextCatalog = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return forGoodWineMob;
    case 'tablet':
      return forGoodWineTab;
    case 'desktop':
      return forGoodWineDesk;
    default:
      return forGoodWineMob;
  }
};

export default {
  setTopTextMain,
  setBottomTextMain,
  setTopTextWineTime,
  setBottomTextWineTime,
  setTopTextAboutUs,
  setBottomTextAboutUs,
  setTopTextCatalog,
  setBottomTextCatalog,
};
