import LoginForm from '@/components/LoginForm';
import ModalWin from '@/components/ModalWin';
import { FC, useEffect } from 'react';

const LoginPage: FC = () => {
  // useEffect(() => {
  //   const foo = async () => {
  //     const options = {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json; charset=UTF-8',
  //         Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaWxpNDE5OTVAZ21haWwuY29tIiwicm9sZSI6IlVTRVIiLCJpZCI6MiwiZXhwIjoxNzExNzQyODI3LCJpYXQiOjE3MTE2NTY0MjcsImVtYWlsIjoic2lsaTQxOTk1QGdtYWlsLmNvbSJ9.IMMHnf0hXAsgcze3KzEY1M7fjyJIPwkS16pVqPp7hjKeW3z-zGeXiq5xZSZbIX16wv46gnEg6CXj54yTJytCWg`,
  //       },
  //     };

  //     fetch(
  //       'https://craft-wine-shop.onrender.com/api/v1/user/get_user',
  //       options
  //     )
  //       .then((res) => res.json())
  //       .then((data) => data)
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   foo();
  // });

  return <ModalWin children={<LoginForm />} />;
};

export default LoginPage;
