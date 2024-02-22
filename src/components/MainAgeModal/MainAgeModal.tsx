import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormData, IProps } from './MainAgeModal.types';
import Button from '../Button';
import { ButtonTypes } from '@/constants';
import {
  FormStyled,
  Input,
  InputContainer,
  MainAgeModalStyled,
  ModalTextWrapper,
  NumbStyled,
} from './MainAgeModal.styled';

const CustomToast: FC<{ message: string }> = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '10px 20px',
        borderRadius: '8px',
        textAlign: 'center',
        zIndex: 9999,
      }}
    >
      {message}
    </div>
  );
};

const MainAgeModal: FC<IProps> = ({ onModalClose }) => {
  const { handleSubmit, register, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      const currentYear = new Date().getFullYear();
      const { year1, year2, year3, year4 } = data;
      const age = currentYear - parseInt(`${year1}${year2}${year3}${year4}`);
      console.log(age);
      if (age >= 18 && age <= 99) {
        onModalClose();
      } else {
        toast(
          <CustomToast
            message='We are sorry, 
                according to your age, 
          you are not allowed to buy alcoholic beverages.'
          />,
          {
            duration: 5000,
          }
        );
        reset();
      }
    } catch (error) {
      toast.error('Error. Please try again.');
      reset();
    }
  };

  return (
    <MainAgeModalStyled>
      <NumbStyled>18+</NumbStyled>
      <ModalTextWrapper>
        <p>
          We do not sell alcoholic beverages to minors! <br /> Confirm that you
          are of legal age to purchase alcoholic beverages
        </p>
        <p>Enter the year of your birth</p>
      </ModalTextWrapper>
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Input
            type='text'
            inputMode='numeric'
            {...register('year1', { required: true })}
            maxLength={1}
          />
          <Input
            type='text'
            inputMode='numeric'
            {...register('year2', { required: true })}
            maxLength={1}
          />
          <Input
            type='text'
            inputMode='numeric'
            {...register('year3', { required: true })}
            maxLength={1}
          />
          <Input
            type='text'
            inputMode='numeric'
            {...register('year4', { required: true })}
            maxLength={1}
          />
        </InputContainer>

        <Button
          title='Confirm'
          height={48}
          sidePadding={20}
          fontSize={14}
          type={ButtonTypes.submit}
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </FormStyled>
    </MainAgeModalStyled>
  );
};

export default MainAgeModal;
