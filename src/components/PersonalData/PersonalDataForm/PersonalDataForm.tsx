import { FC } from 'react';
import { IProps } from '../PersonalData.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormContainer, InputField } from './PersonalDataForm.styled';

const PersonalDataForm: FC<IProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      birthDate: '',
      phoneNumber: user?.phoneNumber || '',
      email: user?.email || '',
      deliveryAddress: user?.deliveryAddress || '',
    },
  });

  // Обработчик отправки формы
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log('Submitting data:', data);
      const response = await $instance.put('/api/user/update', data); // Отправка данных на сервер
      console.log('Server response:', response.data);
      alert('Data updated successfully');
    } catch (error) {
      console.error('Error updating user data:', error);
      alert('Failed to update data');
    }
  };

  return (
    <>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField>
            <label>First name</label>
            <input
              {...register('firstName', { required: 'First name is required' })}
              placeholder='-'
            />
            {errors.firstName && <span>{errors.firstName.message}</span>}
          </InputField>
          <InputField>
            <label>Last name</label>
            <input
              {...register('lastName', { required: 'Last name is required' })}
              placeholder='-'
            />
            {errors.lastName && <span>{errors.lastName.message}</span>}
          </InputField>

          <InputField>
            <label>Birth date</label>
            <input
              type='date'
              {...register('birthDate', {
                required: 'Birth date is required',
              })}
            />
            {errors.birthDate && <span>{errors.birthDate.message}</span>}
          </InputField>
          <InputField>
            <label>Phone number</label>
            <input
              type='tel'
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                  message: 'Invalid phone number',
                },
              })}
              placeholder='-'
            />
            {errors.phoneNumber && <span>{errors.phoneNumber.message}</span>}
          </InputField>
          <InputField>
            <label>Email</label>
            <input
              type='email'
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder='-'
            />
            {errors.email && <span>{errors.email.message}</span>}
          </InputField>
          <InputField>
            <label>Delivery address</label>
            <input
              {...register('deliveryAddress', {
                required: 'Delivery address is required',
              })}
              placeholder='-'
            />
            {errors.deliveryAddress && (
              <span>{errors.deliveryAddress.message}</span>
            )}
          </InputField>
        </form>
      </FormContainer>
    </>
  );
};

export default PersonalDataForm;
