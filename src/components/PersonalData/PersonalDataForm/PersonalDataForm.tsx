import { FC } from 'react';
import { PiUserBold } from 'react-icons/pi';
import { IProps } from '../PersonalData.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormContainer, InputField, TitlePersonalData } from './PersonalDataForm.styled';


const PersonalDataForm: FC<IProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: user?.name || '',
      birthDate: '',
      phoneNumber: '',
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
          <TitlePersonalData>
            <div>
              <PiUserBold />
              <p>Personal data</p>
            </div>
            <Button type='submit'>Edit Data</Button>
          </TitlePersonalData>

          <InputField>
            <label> Name</label>
            <input
              {...register('name', {
                required: 'First name is required',
              })}
              placeholder='Enter your first name'
            />
            {errors.name && <span>{errors.name.message}</span>}
          </InputField>

          <InputField>
            <label>Birth Date</label>
            <input
              type='date'
              {...register('birthDate', {
                required: 'Birth date is required',
              })}
            />
            {errors.birthDate && <span>{errors.birthDate.message}</span>}
          </InputField>
          <InputField>
            <label>Phone Number</label>
            <input
              type='tel'
              {...register('phoneNumber', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                  message: 'Invalid phone number',
                },
              })}
              placeholder='Enter your phone number'
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
              placeholder='Enter your email'
            />
            {errors.email && <span>{errors.email.message}</span>}
          </InputField>
          <InputField>
            <label>Delivery Address</label>
            <input
              {...register('deliveryAddress', {
                required: 'Delivery address is required',
              })}
              placeholder='Enter your delivery address'
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
