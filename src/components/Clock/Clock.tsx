import { FC, useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';

import { ClockStyled } from './Clock.styled';

const Clock: FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const interval = useRef<number | null>(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCurrentTime(format(new Date(), 'HH:mm:ss'));
    }, 1000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return <ClockStyled>{currentTime}</ClockStyled>;
};

export default Clock;
