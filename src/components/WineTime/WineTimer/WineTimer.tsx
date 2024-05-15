import { FC } from 'react';
import Container from '@/components/Container';
import { WineTimerWrapper } from './WineTimer.styled';
import Clock from '@/components/WineTime/Clock';
import { IProps } from './WineTimer.types';

const WineTimer: FC<IProps> = ({ wines, countries }) => {
  const countryNames = countries.map((country) => country).join(', ');
  return (
    <WineTimerWrapper>
      <Container>
        {wines.length > 0 ? (
          <>
            <p>The following offer remains:</p>
            <Clock />
            <p>Discounts on wines of {countryNames}</p>
          </>
        ) : (
          <>
            <p>The following offer remains:</p>
            <Clock />
            <p>Discounts on wines of </p>
          </>
        )}
      </Container>
    </WineTimerWrapper>
  );
};

export default WineTimer;
