import { FC } from 'react';

import Container from '@/components/Container';
import { RxExit } from 'react-icons/rx';

import {
  ListItem,
  PersonalDataNavigationWrapper,
  Title,
} from './PersonalDataNavigation.styled';
import { AriaLabels, PagePaths } from '@/constants';
import PersonalDataLinks from '../PersonalDataLinks';
import navLinksPersonalData from '@/constants/navLinksPersonalData';
import { NavLink } from 'react-router-dom';

const PersonalDataNavigation: FC = ({}) => {
  return (
    <Container>
      <PersonalDataNavigationWrapper>
        <PersonalDataLinks navLinks={navLinksPersonalData} />
        <ListItem>
          <NavLink to={PagePaths.homePath} aria-label={AriaLabels.exit}>
            <RxExit />
            <Title>Exit</Title>
          </NavLink>
        </ListItem>
      </PersonalDataNavigationWrapper>
    </Container>
  );
};

export default PersonalDataNavigation;
