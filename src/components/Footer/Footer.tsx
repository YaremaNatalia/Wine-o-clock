import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@/components/Container';
import Logo from '@/icons/logoWhite.svg?react';
import FooterInformation from '@/components/FooterInformation';
import FooterDelivery from '@/components/FooterDelivery';
import FooterCallCenter from '@/components/FooterCallCenter';
import FooterNews from '@/components/FooterNews';
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
