import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormContainer, InputField } from './PersonalDataForm.styled';
import toast from 'react-hot-toast';
import Messages from '@/constants/messages';
import regExp from '@/constants/regExp';
import { InputTypes } from '@/constants';
import { INewUser } from '@/types/types';
import { IProps } from './PersonalDataForm.types';
import { operations } from '@/tanStackQuery';

const PersonalDataForm: FC<IProps> = ({ onSubmit }) => {
  const user = operations.getPersonalDataCache();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<INewUser>({
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
    errors.firstName &&
      toast.error(
        errors.firstName.type === 'required'
          ? Messages.firstNameReqErr
          : Messages.firstNameErr
      );
    errors.lastName &&
      toast.error(
        errors.lastName.type === 'required'
          ? Messages.lastNameReqErr
          : Messages.lastNameErr
      );
    errors.phoneNumber &&
      toast.error(
        errors.phoneNumber.type === 'required'
          ? Messages.phoneNumberReqErr
          : Messages.phoneNumberErr
      );

    errors.birthDate && toast.error(Messages.birthDateErr);
  }, [isSubmitting, errors]);

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
                validate: (value) => !value || new Date(value) <= new Date(),
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
