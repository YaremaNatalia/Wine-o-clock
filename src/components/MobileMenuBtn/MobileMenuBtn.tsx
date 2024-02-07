import { PiListBold, PiXBold } from 'react-icons/pi';
import { Button } from './MobileMenuBtn.styled';
import { IProps } from './MobileMenuBtn.types';
import { FC } from 'react';
import { IconSizes } from '@/constants';

const MobileMenuBtn: FC<IProps> = ({ onBtnClick, showMobileMenu }) => {
  return (
    <Button onClick={onBtnClick}>
      {showMobileMenu ? (
        <PiXBold size={IconSizes.otherSize} />
      ) : (
        <PiListBold size={IconSizes.otherSize} />
      )}
    </Button>
  );
};

export default MobileMenuBtn;
