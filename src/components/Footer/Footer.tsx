import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@/components/Container';
import Logo from '@/icons/logoWhite.svg?react';
import FooterInformation from '@/components/Footer/FooterInformation';
import FooterDelivery from '@/components/Footer/FooterDelivery';
import FooterCallCenter from '@/components/Footer/FooterCallCenter';
import FooterNews from '@/components/Footer/FooterNews';
import { FooterContentWrapper, FooterStyled } from './Footer.Styled';
import { PagePaths } from '@/constants';

const Footer: FC = () => (
  <>
    <FooterStyled>
      <Container>
        <NavLink to={PagePaths.homePath}>
          <Logo className='footerLogo' title='Wine store logo' />
        </NavLink>
        <FooterContentWrapper>
          <FooterInformation />
          <FooterDelivery />
          <FooterCallCenter />
          <FooterNews />
        </FooterContentWrapper>
      </Container>
    </FooterStyled>
  </>
);

export default Footer;
