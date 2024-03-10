import {
  ButtonTypes,
  FormTypes,
  IconSizes,
  InputTypes,
  PagePaths,
} from '@/constants';
import { INewUser } from '@/types/types';
import { FC, useState } from 'react';
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

const SignUpForm: FC = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const { mutate: signUp } = useMutation({
    mutationFn: operations.signUp,
    onSuccess: onSuccessHTTPRequest,
    onError: onFailedHTTPRequest,
  });
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<INewUser>();
  const navigate = useNavigate();
  const checkboxDescription = (
    <PrivacyPolicy>
      I have read the <Link to={PagePaths.homePath}>terms and conditions</Link>{' '}
      and I agree with them
    </PrivacyPolicy>
  );

  function onSuccessHTTPRequest(): void {
    navigate(PagePaths.logInPath);
  }

  function onFailedHTTPRequest(error: Error): void {
    toast.error(error.message);
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
          settings={{ ...register('email') }}
          formType={FormTypes.auth}
          label='Email'
          leftDistance={19}
          type={InputTypes.email}
        />
        <Input
          settings={{ ...register('firstName') }}
          formType={FormTypes.auth}
          label='First name'
          leftDistance={19}
        />
        <Input
          settings={{ ...register('lastName') }}
          formType={FormTypes.auth}
          label='Last name'
          leftDistance={19}
        />
        <Input
          settings={{ ...register('phoneNumber') }}
          formType={FormTypes.auth}
          label='Phone'
          leftDistance={19}
          type={InputTypes.phone}
        />
        <Input
          settings={{ ...register('password') }}
          formType={FormTypes.auth}
          label='Password'
          leftDistance={19}
        />
        <Input
          settings={{ ...register('confirmationThePassword') }}
          formType={FormTypes.auth}
          label='Confirmation the password'
          leftDistance={19}
        />
        <PrivacyPolicyContainer>
          <Button
            fontSize={16}
            height={48}
            sidePadding={20}
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
