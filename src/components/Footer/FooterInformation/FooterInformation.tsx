import { FC } from 'react';

import { FooterList, FooterTitle } from '@/components/Footer/Footer.Styled';
import {
  FooterInfoBlockWrapper,
  StyledNavLink,
} from './FooterInformation.styled';
import { PagePaths } from '@/constants';

const FooterInformation: FC = () => (
  <FooterInfoBlockWrapper>
    <FooterTitle>INFORMATION</FooterTitle>
    <FooterList className='infoWrapper'>
      <li>
        <StyledNavLink to={PagePaths.aboutUsPath}>About us</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={PagePaths.homePath}>Contacts</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={PagePaths.homePath}>
          Terms of delivery and payment
        </StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={PagePaths.homePath}>Privacy Policy</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to={PagePaths.homePath}>User agreement</StyledNavLink>
      </li>
    </FooterList>
  </FooterInfoBlockWrapper>
);

export default FooterInformation;
