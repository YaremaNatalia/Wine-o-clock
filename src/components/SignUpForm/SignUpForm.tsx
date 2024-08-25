import {
  ButtonForms,
  ButtonTypes,
  FormTypes,
  IconSizes,
  InputTypes,
  PagePaths,
} from '@/constants';
import { AxiosError, INewUser } from '@/types/types';
import { FC, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/Input';
import {
  Form,
  Header,
  PrivacyPolicy,
  PrivacyPolicyContainer,
  Title,
} from './SignUpForm.styled';
import AlternativeAuthLinks from '@/components/AlternativeAuthLinks';
import Button from '@/components/Button';
import { FaCheck } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { operations } from '@/tanStackQuery';
import toast from 'react-hot-toast';
import regExp from '@/constants/regExp';
import AuthParams from '@/constants/authParams';
import Messages from '@/constants/messages';

const SignUpForm: FC = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const { mutate: signUp } = useMutation({
    mutationFn: operations.signUp,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<INewUser>();
  const navigate = useNavigate();
  const checkboxDescription = (
    <PrivacyPolicy>
      I have read the <Link to={PagePaths.homePath}>terms and conditions</Link>{' '}
      and I agree with them
    </PrivacyPolicy>
  );

  useEffect(() => {
    errors.email && toast.error(Messages.emailReqErr);
    errors.firstName &&
      toast.error(
        errors.firstName.type === 'required'
          ? Messages.firstNameReqErr
          : Messages.firstNameErr
      );
    errors.lastName &&
      toast.error(
        errors.lastName.type === 'required'
          ? Messages.lastNameReqErr
          : Messages.lastNameErr
      );
    errors.phoneNumber &&
      toast.error(
        errors.phoneNumber.type === 'required'
          ? Messages.phoneNumberReqErr
          : Messages.phoneNumberErr
      );
    errors.password &&
      toast.error(
        errors.password.type === 'required'
          ? Messages.passwordReqErr
          : Messages.passwordLengthErr
      );
    errors.passwordRepeat && toast.error(Messages.confThePassReqErr);
  }, [isSubmitting, errors]);

  function onSuccessHTTPRequest(): void {
    navigate(PagePaths.logInPath);
  }

  function onFailedHTTPRequest(error: AxiosError): void {
    toast.error(error.response.data.message);
  }

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    signUp(data);
  };

  const onCheckboxChange = () => {
    setAgree((prevState) => !prevState);
  };

  return (
    <>
      <Header>
        <Title>Sign up</Title>
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
            ...register('firstName', {
              required: true,
              pattern: regExp.name,
            }),
          }}
          formType={FormTypes.auth}
          label='First name'
          leftDistance={19}
        />
        <Input
          settings={{
            ...register('lastName', {
              required: true,
              pattern: regExp.name,
            }),
          }}
          formType={FormTypes.auth}
          label='Last name'
          leftDistance={19}
        />
        <Input
          settings={{
            ...register('phoneNumber', {
              required: true,
              pattern: regExp.phoneNumber,
            }),
          }}
          formType={FormTypes.auth}
          label='Phone'
          leftDistance={19}
          type={InputTypes.phone}
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
        <Input
          settings={{
            ...register('passwordRepeat', { required: true }),
          }}
          formType={FormTypes.auth}
          label='Confirmation the password'
          leftDistance={19}
        />
        <PrivacyPolicyContainer>
          <Button
            buttonForm={ButtonForms.other}
            title='Sign up'
            disabled={!agree}
            type={ButtonTypes.submit}
          />
          <Input
            formType={FormTypes.auth}
            type={InputTypes.checkbox}
            altElem={<FaCheck size={IconSizes.checkbox} />}
            label='Completed'
            checked={agree}
            onChange={onCheckboxChange}
            description={checkboxDescription}
          />
        </PrivacyPolicyContainer>
        <AlternativeAuthLinks />
      </Form>
    </>
  );
};

export default SignUpForm;
