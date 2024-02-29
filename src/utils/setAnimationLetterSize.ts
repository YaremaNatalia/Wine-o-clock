import W from '@/icons/letters/mob/wIcon.svg?react';
import E from '@/icons/letters/mob/eIcon.svg?react';
import L from '@/icons/letters/mob/lIcon.svg?react';
import O from '@/icons/letters/mob/oIcon.svg?react';
import V from '@/icons/letters/mob/vIcon.svg?react';
import I from '@/icons/letters/mob/iIcon.svg?react';
import F from '@/icons/letters/mob/fIcon.svg?react';
import N from '@/icons/letters/mob/nIcon.svg?react';
import D from '@/icons/letters/mob/dIcon.svg?react';
import A from '@/icons/letters/mob/aIcon.svg?react';

import WTab from '@/icons/letters/tab/wTab.svg?react';
import ETab from '@/icons/letters/tab/eTab.svg?react';
import LTab from '@/icons/letters/tab/lTab.svg?react';
import OTab from '@/icons/letters/tab/oTab.svg?react';
import VTab from '@/icons/letters/tab/vTab.svg?react';
import ITab from '@/icons/letters/tab/iTab.svg?react';
import FTab from '@/icons/letters/tab/fTab.svg?react';
import NTab from '@/icons/letters/tab/nTab.svg?react';
import DTab from '@/icons/letters/tab/dTab.svg?react';
import ATab from '@/icons/letters/tab/aTab.svg?react';

import WDesk from '@/icons/letters/desk/wDesc.svg?react';
import EDesk from '@/icons/letters/desk/eDesc.svg?react';
import LDesk from '@/icons/letters/desk/lDesc.svg?react';
import ODesk from '@/icons/letters/desk/oDesk.svg?react';
import VDesk from '@/icons/letters/desk/vDesk.svg?react';
import IDesk from '@/icons/letters/desk/iDesk.svg?react';
import FDesk from '@/icons/letters/desk/fDesk.svg?react';
import NDesk from '@/icons/letters/desk/nDesk.svg?react';
import DDesk from '@/icons/letters/desk/dDesk.svg?react';
import ADesk from '@/icons/letters/desk/aDesk.svg?react';
import { ScreenSize } from '@/types/types';

const setAnimationTopLetterSize = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return [W, E, L, O, V, E, L, I, F, E];
    case 'tablet':
      return [WTab, ETab, LTab, OTab, VTab, ETab, LTab, ITab, FTab, ETab];
    case 'desktop':
      return [
        WDesk,
        EDesk,
        LDesk,
        ODesk,
        VDesk,
        EDesk,
        LDesk,
        IDesk,
        FDesk,
        EDesk,
      ];
    default:
      return [];
  }
};

const setAnimationBottomLetterSize = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case 'mobile':
      return [A, N, D, W, I, N, E];
    case 'tablet':
      return [ATab, NTab, DTab, WTab, ITab, NTab, ETab];
    case 'desktop':
      return [ADesk, NDesk, DDesk, WDesk, IDesk, NDesk, EDesk];
    default:
      return [];
  }
};
export default { setAnimationTopLetterSize, setAnimationBottomLetterSize };
