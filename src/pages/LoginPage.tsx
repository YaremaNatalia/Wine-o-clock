import LoginForm from '@/components/LoginForm';
import ModalWin from '@/components/ModalWin';
import { FC } from 'react';

const LoginPage: FC = () => {
  return <ModalWin children={<LoginForm />} />;
};

export default LoginPage;
