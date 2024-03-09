import { ButtonForms, FormTypes, IconSizes, InputTypes, PagePaths } from '@/constants';
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
import { Link } from 'react-router-dom';

const SignUpForm: FC = () => {
  const [agree, setAgree] = useState<boolean>(false);
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<INewUser>();

  const checkboxDescription = (
    <PrivacyPolicy>
      I have read the <Link to={PagePaths.homePath}>terms and conditions</Link>{' '}
      and I agree with them
    </PrivacyPolicy>
  );

  const handleFormSubmit: SubmitHandler<INewUser> = (data) => {
    console.log(data);
    reset();
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
            buttonForm={ButtonForms.other}
            title='Sign up'
            disabled={!agree}
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
