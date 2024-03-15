import { FC } from 'react';
import Container from '@/components/Container';
import { WineTimerWrapper } from './WineTimer.styled';
import Clock from '@/components/Clock';

const WineTimer: FC = () => {
  return (
    <WineTimerWrapper>
      <Container>
        <p>The following offer remains:</p>
        <Clock/>
        <p>Discounts on Italian wines</p>
      </Container>
    </WineTimerWrapper>
  );
};

export default WineTimer;
