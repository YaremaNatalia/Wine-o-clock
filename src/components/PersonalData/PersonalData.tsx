import { FC } from 'react';
import PersonalDataNavigation from './PersonalDataNavigation';
import { PiUserBold } from 'react-icons/pi';
const PersonalData: FC = () => {
  return (
    <>
      <PersonalDataNavigation />
      <div>
        <PiUserBold />
        <p>Personal data</p>
       
      </div>
    </>
  );
};

export default PersonalData;
