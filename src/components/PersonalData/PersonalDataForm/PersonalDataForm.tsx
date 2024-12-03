import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, InputField } from './PersonalDataForm.styled';
import toast from 'react-hot-toast';
import Messages from '@/constants/messages';
import regExp from '@/constants/regExp';
import { InputTypes } from '@/constants';
import { IUser } from '@/types/types';
import { IProps } from './PersonalDataForm.types';

const PersonalDataForm: FC<IProps> = ({ user, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUser>({
    defaultValues: {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      birthDate: user?.birthDate || '',
      phoneNumber: user?.phoneNumber || '',
      email: user?.email || '',
      deliveryAddress: user?.deliveryAddress || '',
    },
  });

  useEffect(() => {
    toast.dismiss();
    if (errors.firstName?.type === 'pattern') {
      toast.error(Messages.firstNameErr);
    }
    if (errors.lastName?.type === 'pattern') {
      toast.error(Messages.lastNameErr);
    }
    if (errors.birthDate?.message) {
      toast.error(errors.birthDate?.message);
    }
    if (errors.phoneNumber?.type === 'pattern') {
      toast.error(Messages.phoneNumberErr);
    }
  }, [errors]);

  return (
    <>
      <FormContainer>
        <form id='personal-data-form' onSubmit={handleSubmit(onSubmit)}>
          <InputField>
            <label>First name</label>
            <input
              {...register('firstName', {
                pattern: new RegExp(regExp.name),
              })}
              type={InputTypes.text}
              placeholder='-'
            />
          </InputField>
          <InputField>
            <label>Last name</label>
            <input
              {...register('lastName', {
                pattern: new RegExp(regExp.name),
              })}
              type={InputTypes.text}
              placeholder='-'
            />
          </InputField>

          <InputField>
            <label>Birth date</label>
            <input
              {...register('birthDate', {
                validate: (value) => {
                  if (value && new Date(value) > new Date()) {
                    return 'Date  birth cannot be in the future';
                  }
                  return true;
                },
              })}
              type={InputTypes.date}
            />
          </InputField>
          <InputField>
            <label>Phone number</label>
            <input
              {...register('phoneNumber', {
                pattern: new RegExp(regExp.phoneNumber),
              })}
              type={InputTypes.phone}
              placeholder='-'
            />
          </InputField>
          <InputField>
            <label>Email</label>
            <input
              {...register('email')}
              type={InputTypes.email}
              placeholder='-'
            />
          </InputField>
          <InputField>
            <label>Delivery address</label>
            <input
              {...register('deliveryAddress')}
              type={InputTypes.text}
              placeholder='-'
            />
          </InputField>
        </form>
      </FormContainer>
    </>
  );
};

export default PersonalDataForm;
