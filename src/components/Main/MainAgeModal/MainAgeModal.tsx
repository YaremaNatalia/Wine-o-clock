import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormData, IProps } from './MainAgeModal.types';
import Button from '../../Button';
import { ButtonTypes } from '@/constants';
import CustomToast from '../../CustomToast';
import {
  FormStyled,
  Input,
  InputContainer,
  MainAgeModalStyled,
  ModalTextWrapper,
  NumbStyled,
} from './MainAgeModal.styled';

const MainAgeModal: FC<IProps> = ({ onModalClose }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid },
  } = useForm<FormData>();

  const move = (
    event: React.KeyboardEvent<HTMLInputElement>,
    toInpId: string
  ): void => {
    const fromInp = event.currentTarget;
    const length = fromInp.value.length;
    const maxLength = parseInt(fromInp.getAttribute('maxLength') || '0');

    if (length === maxLength) {
      document.getElementById(toInpId)?.focus();
    }

    if (event.key === 'Backspace' && length === 0) {
      const prevInput = fromInp.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    try {
      const currentYear = new Date().getFullYear();
      const { year1, year2, year3, year4 } = data;
      const age = currentYear - parseInt(`${year1}${year2}${year3}${year4}`);
      if (age >= 18 && age <= 99) {
        onModalClose();
      } else {
        toast.error(
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
            id='inp1'
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year1', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            onKeyUp={(e) => move(e, 'inp2')}
          />
          <Input
            id='inp2'
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year2', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            onKeyUp={(e) => move(e, 'inp3')}
          />
          <Input
            id='inp3'
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year3', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            onKeyUp={(e) => move(e, 'inp4')}
          />
          <Input
            id='inp4'
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year4', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            onKeyUp={(e) => move(e, '')}
          />
        </InputContainer>
        <Button
          title='Confirm'
          type={ButtonTypes.submit}
          onClick={(e) => {
            e.currentTarget.blur();
          }}
          disabled={!isValid}
        />
      </FormStyled>
    </MainAgeModalStyled>
  );
};

export default MainAgeModal;
