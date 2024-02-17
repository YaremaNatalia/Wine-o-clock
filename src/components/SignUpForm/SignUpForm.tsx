import { FormTypes, InputTypes } from '@/constants';
import { INewUser } from '@/types/types';
import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '@/components/Input';
import {
  Form,
  Header,
  PrivacyPolicyContainer,
  Title,
} from './SignUpForm.styled';
import AlternativeAuthLinks from '@/components/AlternativeAuthLinks';
import Button from '@/components/Button';

const SignUpForm: FC = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<INewUser>();

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    console.log(data);
    reset();
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
          settings={{ ...register('phone') }}
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
        <PrivacyPolicyContainer>
          <Button
            fontSize={16}
            height={48}
            sidePadding={20}
            title='Sign up'
            disabled={!agree}
            onClick={() => {
              console.log(11111);
            }}
          />
        </PrivacyPolicyContainer>
        <AlternativeAuthLinks />
      </Form>
    </>
  );
};

export default SignUpForm;
