import { FC } from 'react';
import { useForm, SubmitHandler, useController } from 'react-hook-form';

import toast from 'react-hot-toast';
import Input from '@/components/Input';
import { ButtonTypes, FormTypes, InputTypes } from '@/constants';
import Button from '@/components/Button';
import { Form } from './Subscribe.styled';
import { FormData } from './Subscribe.types';

const Subscribe: FC = () => {
  const { handleSubmit, control, reset } = useForm<FormData>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log('Sending email to:', data.email);

      toast.success('Email subscription successful!');
      reset();
    } catch (error) {
      toast.error('Error subscribing to email. Please try again.');
      reset();
    }
  };
  const { field } = useController({ name: 'email', control });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...field}
        formType={FormTypes.subscribe}
        settings={{
          placeholder: 'Enter email',
          required: true,
        }}
        type={InputTypes.email}
      />

      <Button
        title='Subscribe'
        width={120}
        height={48}
        sidePadding={20}
        fontSize={16}
        type={ButtonTypes.submit}
        onClick={(e) => {
          e.currentTarget.blur();
        }}
      />
    </Form>
  );
};

export default Subscribe;
