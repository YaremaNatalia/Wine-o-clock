import { FC } from 'react';
import { Form, Header, Title, ButtonsWrap } from './LoginForm.styled';
import Input from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICredentials } from '@/types/types';
import {
  ButtonForms,
  ClassNames,
  FormTypes,
  InputTypes,
  PagePaths,
} from '@/constants';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import AlternativeAuthLinks from '@/components/AlternativeAuthLinks';

const LoginForm: FC = () => {
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ICredentials>();

  const handleFormSubmit: SubmitHandler<ICredentials> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Header>
        <Title>Log in</Title>
      </Header>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('email') }}
          formType={FormTypes.auth}
          label='Email'
          leftDistance={19}
          type={InputTypes.email}
        />
        <Input
          settings={{ ...register('password') }}
          formType={FormTypes.auth}
          label='Password'
          leftDistance={19}
        />
        <ButtonsWrap>
          <Button buttonForm={ButtonForms.other} title='Log in' />
          <Link to={PagePaths.signUpPath} className={ClassNames.signUpLink}>
            Sign up
          </Link>
        </ButtonsWrap>
        <AlternativeAuthLinks />
        <Link to={PagePaths.forgotPasswordPath}>Forgot your password?</Link>
      </Form>
    </>
  );
};

export default LoginForm;
