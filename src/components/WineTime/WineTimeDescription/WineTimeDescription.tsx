import { FC } from 'react';

import Container from '@/components/Container';

import Clock from '@/icons/clock.svg?react';
import Calendar from '@/icons/calendar.svg?react';
import HeartOnHand from '@/icons/heartOnHand.svg?react';
import Fire from '@/icons/fire.svg?react';
import {
  DescriptionTitle,
  WineTimeDescriptionStyled,
  WineTimeList,
} from './WineTimeDescription.styled';

const WineTimeDescription: FC = () => {
  return (
    <WineTimeDescriptionStyled>
      <Container>
        <div className='textWrapper'>
          <DescriptionTitle>How does it work?</DescriptionTitle>
          <p className='subtitle'>
            Welcome to "wine o'clock" - a store where every hour is wine time!
          </p>
          <WineTimeList>
            <li>
              <Clock title='Clock' />
              <h3>Time magic clock:</h3>
              <p>
                Our site is equipped with a special "clock" that monitors the
                real time in your region.
              </p>
            </li>
            <li>
              <Calendar title='Calendar' />
              <h3>Don't forget to visit every day:</h3>
              <p>
                Time moves quickly, and with us you can always get a new chance
                to discover new tastes. So don't miss your wine hour!
              </p>
            </li>
            <li>
              <HeartOnHand title='Heart on the hand' />
              <h3>Your personal discount:</h3>
              <p>
                When you visit the site, the clock shows the current time. And
                here's a miracle - it's this time that makes you a participant
                in our special promotion!
              </p>
            </li>
            <li>
              <Fire title='Fire' />
              <h3>Special offer:</h3>
              <p>
                Now, when the clock reads, for example, 6:59, you get a special
                discount on wine from the country where that time is. For
                example, if it's 6:59 p.m. in France, you get a discount on
                French wine.
              </p>
            </li>
          </WineTimeList>
        </div>
      </Container>
    </WineTimeDescriptionStyled>
  );
};

export default WineTimeDescription;
