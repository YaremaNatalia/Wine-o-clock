import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FormData, IProps } from './MainAgeModal.types';
import Button from '../Button';
import { ButtonTypes } from '@/constants';
import CustomToast from '../CustomToast';
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

  // const useInputWithFocus = (
  //   ref: React.MutableRefObject<(HTMLInputElement | null)[]>,
  //   index: number,
  //   focusNextInput: (currentIndex: number) => void
  // ) => {
  //   return {
  //     ref: (el: HTMLInputElement | null) => {
  //       ref.current[index] = el;
  //     },
  //     onChange: () => {
  //       focusNextInput(index);
  //     },
  //   };
  // };

  // const inputRefs = useRef<HTMLInputElement[]>([]);

  // const focusNextInput = (currentInputIndex: number) => {
  //   const nextInputIndex = currentInputIndex + 1;
  //   if (inputRefs.current[nextInputIndex]) {
  //     inputRefs.current[nextInputIndex]?.focus();
  //   }
  // };

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
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year1', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            // {...useInputWithFocus(inputRefs, 0, focusNextInput)}
          />
          <Input
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year2', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            // {...useInputWithFocus(inputRefs, 1, focusNextInput)}
          />
          <Input
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year3', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            // {...useInputWithFocus(inputRefs, 2, focusNextInput)}
          />
          <Input
            type='text'
            inputMode='numeric'
            placeholder='0'
            {...register('year4', {
              required: true,
              pattern: /^[0-9]*$/,
            })}
            maxLength={1}
            // {...useInputWithFocus(inputRefs, 3, focusNextInput)}
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
          disabled={!isValid}
        />
      </FormStyled>
    </MainAgeModalStyled>
  );
};

export default MainAgeModal;
