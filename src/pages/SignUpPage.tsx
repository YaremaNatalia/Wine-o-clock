import ModalWin from '@/components/ModalWin';
import SignUpForm from '@/components/SignUpForm';
import { FC } from 'react';

const SignUpPage: FC = () => {
  return <ModalWin children={<SignUpForm />} />;
};

export default SignUpPage;
