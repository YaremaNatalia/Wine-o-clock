import { FC, useState, useEffect } from 'react';
import moment from 'moment';
import { ClockStyled } from './Clock.styled';

const Clock: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(moment().format('HH:mm:ss'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <ClockStyled>{currentTime}</ClockStyled>;
};

export default Clock;
