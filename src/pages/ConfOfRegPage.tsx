import ConfOfRegForm from '@/components/ConfOfRegForm';
import ModalWin from '@/components/ModalWin';
import { FC } from 'react';

const ConfOfRegPage: FC = () => {
  return <ModalWin children={<ConfOfRegForm />} />;
};

export default ConfOfRegPage;
