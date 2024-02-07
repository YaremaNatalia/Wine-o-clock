import { FC } from 'react';
import { FooterList, FooterTitle } from '@/components/Footer/Footer.styled';
import { FaApplePay } from 'react-icons/fa';
import { RiVisaLine } from 'react-icons/ri';
import MasterCard from '@/icons/masterCard.svg?react';
import {
  DeliveryWrapper,
  FooterDeliveryWrapper,
  PaymentLogoWrapper,
  PaymentWrapper,
} from './FooterDelivery.styled';

const FooterDelivery: FC = () => (
  <FooterDeliveryWrapper>
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
  </FooterDeliveryWrapper>
);

export default FooterDelivery;
