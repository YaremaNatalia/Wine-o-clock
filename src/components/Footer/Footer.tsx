import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '@/images/logoWhite.png';
import FooterInformation from '@/components/FooterInformation';
import FooterDelivery from '@/components/FooterDelivery';
import FooterCallCenter from '@/components/FooterCallCenter';
import FooterNews from '@/components/FooterNews';
import {
  FooterContentWrapper,
  FooterStyled,
  LogoStyled,
} from './Footer.styled';

const Footer: FC = () => (
  <>
    <FooterStyled>
      <NavLink to='/'>
        <LogoStyled src={logo} alt='Wine store logo' />
      </NavLink>
      <FooterContentWrapper>
        <FooterInformation />
        <FooterDelivery />
        <FooterCallCenter />
        <FooterNews />
      </FooterContentWrapper>
    </FooterStyled>
  </>
);

export default Footer;
