import { FC } from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import FooterSubscribe from '@/components/FooterSubscribe';
import { FooterTitle } from '@/components/Footer/Footer.styled';
import {
  FooterNewsWrapper,
  NetworkLogoWrapper,
  NetworksWrapper,
  NewsWrapper,
} from './FooterNews.styled';

const FooterNews: FC = () => (
  <FooterNewsWrapper>
    <NewsWrapper>
      <FooterTitle className='newsTitle'>
        RECEIVE NEWS AND DISCOUNTS
      </FooterTitle>
      <FooterSubscribe />
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
  </FooterNewsWrapper>
);

export default FooterNews;
