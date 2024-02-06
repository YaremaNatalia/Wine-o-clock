import { FC } from 'react';
import Button from '../Button';
import { ButtonDesign, ButtonTypes } from '@/constants';
import {
  EveryHourText,
  MainWineTimeBg,
  MainWineTimeDescription,
  MainWineTimeWrapper,
  WineTimeText,
  WineTimeWrapper,
} from './MainWineTime.styled';
import { wineTime } from '@/images/mainPage';


const MainWineTime: FC = () => (
  <MainWineTimeWrapper>
    <WineTimeWrapper>
      <MainWineTimeBg src={wineTime.mob1xJpg} />
      <WineTimeText>Wine time </WineTimeText>
      <EveryHourText>every hour</EveryHourText>
    </WineTimeWrapper>
    <MainWineTimeDescription>
      <h2>Wine o`clock</h2>
      <p>
        Every hour discounts on the best wines of the country. <br></br> All
        people need something that helps us calm down at the end of the day, a
        great way to fill this gap can be compensated through a glass of wine.
      </p>
      <Button
        title='See more'
        width={327}
        height={41}
        sidePadding={20}
        fontSize={14}
        type={ButtonTypes.button}
        buttonDesign={ButtonDesign.white}
        onClick={(e) => {
          e.currentTarget.blur();
        }}
      />
    </MainWineTimeDescription>
  </MainWineTimeWrapper>
);

export default MainWineTime;
