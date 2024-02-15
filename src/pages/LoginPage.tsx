import LoginForm from '@/components/LoginForm';
import ModalWin from '@/components/ModalWin';
import { FC, useState } from 'react';

const LoginPage: FC = () => {
  const [showModalWin, setShowModalWin] = useState<boolean>(true);

  const setModalWinState = () => {
    setShowModalWin((prevState) => !prevState);
  };

  return (
    showModalWin && (
      <ModalWin children={<LoginForm />} setModalWinState={setModalWinState} />
    )
  );
};

export default LoginPage;
