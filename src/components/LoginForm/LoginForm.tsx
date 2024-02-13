import { FC } from 'react';
import { Form, Header, Title, ButtonsWrap } from './LoginForm.styled';
import Input from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICredentials } from '@/types/types';
import { ClassNames, FormTypes, PagePaths } from '@/constants';
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
          formType={FormTypes.logIn}
          label='Email'
          leftDistance={19}
        />
        <Input
          settings={{ ...register('password') }}
          formType={FormTypes.logIn}
          label='Password'
          leftDistance={19}
        />
        <ButtonsWrap>
          <Button fontSize={16} height={48} sidePadding={20} title='Log in' />
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
