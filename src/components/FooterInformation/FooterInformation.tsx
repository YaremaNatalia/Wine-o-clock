import { FC } from 'react';

import { FooterList, FooterTitle } from '@/components/Footer/Footer.Styled';
import {
  FooterInfoBlockWrapper,
  StyledNavLink,
} from './FooterInformation.styled';

const FooterInformation: FC = () => (
  <FooterInfoBlockWrapper>
    <FooterTitle>INFORMATION</FooterTitle>
    <FooterList className='infoWrapper'>
      <li>
        <StyledNavLink to='/'>About us</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/'>Contacts</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/'>Terms of delivery and payment</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/'>Privacy Policy</StyledNavLink>
      </li>
      <li>
        <StyledNavLink to='/'>User agreement</StyledNavLink>
      </li>
    </FooterList>
  </FooterInfoBlockWrapper>
);

export default FooterInformation;
