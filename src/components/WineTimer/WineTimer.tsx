import { FC } from 'react';
import Container from '@/components/Container';
import { WineTimerWrapper } from './WineTimer.styled';
import Clock from '@/components/Clock';
import { IProps } from './WineTimer.types';

const WineTimer: FC<IProps> = ({ country }) => {
  return (
    <WineTimerWrapper>
      <Container>
        <p>The following offer remains:</p>
        <Clock />
        <p>Discounts on wines of {country.name} </p>
      </Container>
    </WineTimerWrapper>
  );
};

export default WineTimer;
