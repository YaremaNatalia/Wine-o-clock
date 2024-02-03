import { FC } from 'react';
import logo from '@/images/logoWhite.png';
import {
  DeliveryWrapper,
  FooterBlockWrapper,
  FooterList,
  FooterStyled,
  FooterTitle,
  LogoStyled,
  NetworkLogoWrapper,
  NetworksWrapper,
  NewsWrapper,
  PaymentLogoWrapper,
  PaymentWrapper,
  StyledNavLink,
  FooterContentWrapper,
} from './Footer.Styled';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaApplePay } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import MasterCard from '@/images/masterCard.svg?react';
import Subscribe from '../Subscribe';



const Footer: FC = () => (
  <>
    <FooterStyled>
      <StyledNavLink to='/'>
        <LogoStyled src={logo} alt='Wine store logo' />
      </StyledNavLink>
      <FooterContentWrapper>
        <FooterBlockWrapper>
          <FooterTitle>INFORMATION</FooterTitle>
          <FooterList className='infoWrapper'>
            <li>
              <StyledNavLink to='/'>About us</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/'>Contacts</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/'>
                Terms of delivery and payment
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/'>Privacy Policy</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to='/'>User agreement</StyledNavLink>
            </li>
          </FooterList>
        </FooterBlockWrapper>

        <FooterBlockWrapper className='deliveryWrapper'>
          <DeliveryWrapper>
            <FooterTitle>DELIVERY</FooterTitle>
            <FooterList>
              <li>Mon-Fri 11:00-21:00</li>
              <li>Sat-Sun 11:00-20:00</li>
            </FooterList>
          </DeliveryWrapper>
          <PaymentWrapper>
            <FooterTitle className='paymentTitle'>PAYMENT</FooterTitle>
            <PaymentLogoWrapper>
              <li>
                <MasterCard />
              </li>
              <li>
                <RiVisaLine className='visaIcon' title='VISA' size={56} />
              </li>
              <li>
                <FaApplePay title='ApplePay' size={40} />
              </li>
            </PaymentLogoWrapper>
          </PaymentWrapper>
        </FooterBlockWrapper>

        <FooterBlockWrapper className='callCenterWrapper'>
          <FooterTitle className='callCenterTitle'>
            WORK SCHEDULE OF THE CALL CENTER
          </FooterTitle>
          <FooterList>
            <li>Mon-Fri 8:00-19:00</li>
            <li>Sat-Sun 10:00-17:00</li>
          </FooterList>
        </FooterBlockWrapper>

        <FooterBlockWrapper className='newsWrapper'>
          <NewsWrapper>
            <FooterTitle className='newsTitle'>
              RECEIVE NEWS AND DISCOUNTS
            </FooterTitle>
            <Subscribe/>
          </NewsWrapper>

          <NetworksWrapper>
            <FooterTitle>SOCIAL NETWORKS</FooterTitle>
            <NetworkLogoWrapper>
              <li>
                <a
                  href='https://www.instagram.com/'
                  target='_blank'
                  aria-label='Instagram'
                  rel='noopener noreferrer nofollow'
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href='https://t.me/'
                  target='_blank'
                  aria-label='Telegram'
                  rel='noopener noreferrer nofollow'
                >
                  <FaTelegramPlane size={24} />
                </a>
              </li>

              <li>
                <a
                  href='https://www.facebook.com/'
                  target='_blank'
                  aria-label='Facebook'
                  rel='noopener noreferrer nofollow'
                >
                  <FaFacebook size={24} />
                </a>
              </li>
            </NetworkLogoWrapper>
          </NetworksWrapper>
        </FooterBlockWrapper>
      </FooterContentWrapper>
    </FooterStyled>
  </>
);

export default Footer;
