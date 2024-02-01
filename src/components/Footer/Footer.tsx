import { FC } from 'react';

import logo from '@/images/logoWhite.png';
import {
  CallCenterWrapper,
  DeliveryWrapper,
  FooterList,
  FooterStyled,
  FooterTitle,
  InformationWrapper,
  NetworkLogoWrapper,
  NetworksWrapper,
  NewsWrapper,
  PaymentLogoWrapper,
  PaymentWrapper,
} from './Footer.Styled';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
// import { CiFacebook } from 'react-icons/ci';
import { FaFacebook } from 'react-icons/fa';
// import { FaApplePay } from 'react-icons/fa';
// import { FaCcVisa } from 'react-icons/fa';
// import { FaCcMastercard } from 'react-icons/fa';

const Footer: FC = () => (
  <>
    <FooterStyled>
      <img src={logo} alt='Wine store logo' />
      <InformationWrapper>
        <FooterTitle>INFORMATION</FooterTitle>
        <FooterList>
          <li>About us</li>
          <li>Contacts</li>
          <li>Terms of delivery and payments</li>
          <li>Privacy policy</li>
          <li>User agreement</li>
        </FooterList>
      </InformationWrapper>

      <DeliveryWrapper>
        <FooterTitle>DELIVERY</FooterTitle>
        <FooterList>
          <li>Mon-Fri 11:00-21:00</li>
          <li>Sat-Sun 11:00-20:00</li>
        </FooterList>
      </DeliveryWrapper>
      <PaymentWrapper>
        <FooterTitle>PAYMENT</FooterTitle>
        <PaymentLogoWrapper>
          {/*  <img src={logo} alt='a logo of Mastercard' />
                                <img src={logo} alt='a logo of VISA' />
            <img src={logo} alt='a logo of ApplePay' />*/}
        </PaymentLogoWrapper>
      </PaymentWrapper>

      <CallCenterWrapper>
        <FooterTitle>CALL CENTRE WORKING HOURS</FooterTitle>
        <FooterList>
          <li>Mon-Fri 08:00-19:00</li>
          <li>Sat-Sun 10:00-17:00</li>
        </FooterList>
      </CallCenterWrapper>
      <NewsWrapper>
        <FooterTitle>RECEIVE NEWS AND DISCOUNTS</FooterTitle>

        <p>email</p>
      </NewsWrapper>
      <NetworksWrapper>
        <FooterTitle>SOCIAL NETWORKS</FooterTitle>
        <NetworkLogoWrapper>
          <li>
            <FaInstagram />
          </li>
          <li>
            <FaTelegramPlane />
          </li>
          <li>
            <FaFacebook />
          </li>
        </NetworkLogoWrapper>
      </NetworksWrapper>
    </FooterStyled>
  </>
);

export default Footer;
