import { FC } from 'react';
import { Form, Header, Title } from './ConfOfRegForm.styled';
import { ConfOfReg } from '@/types/types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormTypes } from '@/constants';
import Input from '@/components/Input';
import Button from '@/components/Button';

const ConfOfRegForm: FC = () => {
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<ConfOfReg>();

  const handleFormSubmit: SubmitHandler<ConfOfReg> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
      <Header>
        <Title>Confirmation of registration</Title>
      </Header>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('password') }}
          formType={FormTypes.auth}
          label='Password'
          leftDistance={19}
        />
        <Button fontSize={16} height={48} sidePadding={20} title='Log in' />
      </Form>
    </>
  );
};

export default ConfOfRegForm;
