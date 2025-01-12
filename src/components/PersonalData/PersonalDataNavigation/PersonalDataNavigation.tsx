import { FC } from 'react';
import { RxExit } from 'react-icons/rx';

import {
  ListItem,
  PersonalDataNavigationWrapper,
} from './PersonalDataNavigation.styled';
import { AriaLabels, PagePaths } from '@/constants';
import PersonalDataLinks from '../PersonalDataLinks';
import navLinksPersonalData from '@/constants/navLinksPersonalData';
import { useNavigate } from 'react-router-dom';
import useLogout from '@/hooks/useLogout';

const PersonalDataNavigation: FC = () => {
  const navigate = useNavigate();
  const { logout, isPendingLogout } = useLogout();

  const handleLogOut = () => {
    navigate(PagePaths.homePath);
    logout();
  };

  return (
    <PersonalDataNavigationWrapper>
      <PersonalDataLinks navLinks={navLinksPersonalData} />
      <ListItem>
        <button
          disabled={isPendingLogout}
          aria-label={AriaLabels.exit}
          onClick={handleLogOut}
        >
          <RxExit />
          <p>Exit</p>
        </button>
      </ListItem>
    </PersonalDataNavigationWrapper>
  );
};

export default PersonalDataNavigation;
