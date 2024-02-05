import { FC } from 'react';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast from 'react-hot-toast';
import Input from '../Input';
import { ButtonTypes, FormTypes, InputTypes } from '@/constants';
import Button from '../Button';
import { ButtonWrapper, SubscribeWrapper } from './Subscribe.styled';
import { FormData } from './Subscribe.types';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
});

const Subscribe: FC = () => {
  const {
    register,
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
      console.log('Form reset successful');
    } catch (error) {
      toast.error('Error subscribing to emails. Please try again.');
    }
  };
  if (isSubmitSuccessful) {
    reset();
  }
  return (
    <SubscribeWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name='email'
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              {...register('email')}
              formType={FormTypes.subscribe}
              settings={{
                placeholder: 'Enter email',
                required: true,
              }}
              type={InputTypes.email}
            />
          )}
        />

        <ButtonWrapper>
          <Button
            title='Subscribe'
            width={120}
            height={50}
            sidePadding={20}
            fontSize={16}
            type={ButtonTypes.submit}
          />
        </ButtonWrapper>
      </form>
    </SubscribeWrapper>
  );
};

export default Subscribe;
