import { FC } from 'react';
import { FooterList, FooterTitle } from '@/components/Footer/Footer.Styled';
import { FooterCallCenterWrapper } from './FooterCallCenter.styled';

const FooterCallCenter: FC = () => (
  <FooterCallCenterWrapper>
    <FooterTitle className='callCenterTitle'>
      WORK SCHEDULE OF THE CALL CENTER
    </FooterTitle>
    <FooterList>
      <li>Mon-Fri 8:00-19:00</li>
      <li>Sat-Sun 10:00-17:00</li>
    </FooterList>
  </FooterCallCenterWrapper>
);

export default FooterCallCenter;
