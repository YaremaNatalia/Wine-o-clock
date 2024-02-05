import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Input from '../Input';
import { ButtonTypes, FormTypes, InputTypes } from '@/constants';
import Button from '../Button';
import { Form } from './Subscribe.styled';
import { FormData } from './Subscribe.types';
import { makeBlur } from '@/utils';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const Subscribe: FC = () => {
  const {

    handleSubmit,
    control,
    formState: { isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
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
      toast.error('Error subscribing to emails. Please try again.');
    }
  };
  if (isSubmitSuccessful) {
    reset();
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            {...field}
    
            formType={FormTypes.subscribe}
            settings={{
              placeholder: 'Enter email',
              required: true,
            }}
            type={InputTypes.email}
          />
        )}
      />
      <Button
        title='Subscribe'
        width={120}
        height={48}
        sidePadding={20}
        fontSize={16}
        type={ButtonTypes.submit}
         onClick={(e) => {
            makeBlur(e.currentTarget);
          }}
      />
    </Form>
  );
};

export default Subscribe;
