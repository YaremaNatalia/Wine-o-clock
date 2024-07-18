import { FC, useEffect } from 'react';
import { Form, Header, Title, ButtonsWrap } from './LoginForm.styled';
import Input from '@/components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ICredentials } from '@/types/types';
import {
  ButtonForms,
  ButtonTypes,
  ClassNames,
  FormTypes,
  InputTypes,
  PagePaths,
} from '@/constants';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import AlternativeAuthLinks from '@/components/AlternativeAuthLinks';
import { useMutation } from '@tanstack/react-query';
import { QueryKeys,  operations, queryClient } from '@/tanStackQuery';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { $instance } from '@/utils/backendURL';
import AuthParams from '@/constants/authParams';
import Messages from '@/constants/messages';

const LoginForm: FC = () => {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ICredentials>();
  const { mutate: login } = useMutation({
    mutationFn: operations.login,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });

  useEffect(() => {
    errors.email && toast.error(Messages.emailReqErr);
    errors.password &&
      toast.error(
        errors.password.type === 'required'
          ? Messages.passwordReqErr
          : Messages.passwordLengthErr
      );
  }, [isSubmitting, errors]);

  function onSuccessHTTPRequest(token: string): void {
    queryClient.setQueryData([QueryKeys.token], token);
    $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  }

  function onFailedHTTPRequest(error: AxiosError): void {
    toast.error(String(error?.response?.data));
  }

  const handleFormSubmit: SubmitHandler<ICredentials> = (data) => {
    login(data);
  };

  return (
    <>
      <Header>
        <Title>Log in</Title>
      </Header>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          formType={FormTypes.auth}
          label='Email'
          leftDistance={19}
          type={InputTypes.email}
        />
        <Input
          settings={{
            ...register('password', {
              required: true,
              minLength: AuthParams.passwordMinLength,
              maxLength: AuthParams.passwordMaxLength,
            }),
          }}
          formType={FormTypes.auth}
          label='Password'
          leftDistance={19}
        />
        <ButtonsWrap>
          <Button
            buttonForm={ButtonForms.other}
            title='Log in'
            type={ButtonTypes.submit}
          />
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
