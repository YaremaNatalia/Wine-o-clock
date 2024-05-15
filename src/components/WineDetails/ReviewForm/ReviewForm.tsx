import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ReviewFormData } from './ReviewForm.types';
import Button from '../../Button';
import { ButtonDesign, ButtonForms, ButtonTypes } from '@/constants';
import { Form } from './ReviewForm.styled';

const ReviewForm: FC = () => {
  const { register, handleSubmit, reset } = useForm<ReviewFormData>({
    defaultValues: {
      comment: '',
    },
  });

  const submitForm = (data: ReviewFormData) => {
    console.log('Added review:', data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <label>
        Write your review
        <textarea id='comment' {...register('comment')} />
      </label>
      <Button
        buttonForm={ButtonForms.button}
        title='Leave a review'
        type={ButtonTypes.submit}
        buttonDesign={ButtonDesign.burgundy}
      ></Button>
    </Form>
  );
};

export default ReviewForm;
