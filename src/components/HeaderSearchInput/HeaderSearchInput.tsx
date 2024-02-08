import { FC } from 'react';
import { useForm, SubmitHandler, useController } from 'react-hook-form';

import Input from '@/components/Input';
import { AriaLabels, ButtonTypes, FormTypes, InputTypes } from '@/constants';
import { FormData } from './HeaderSearchInput.types';
import { Form } from './HeaderSearchInput.styled';
import IconButton from '../IconButton';
import { IoSearch } from 'react-icons/io5';

const HeaderSearchInput: FC = () => {
  const { handleSubmit, control, reset } = useForm<FormData>({
    defaultValues: {
      search: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      console.log(data.search);

      reset();
    } catch (error) {
      reset();
    }
  };

  const handleClick = () => {
    try {
      console.log('click');
      reset();
    } catch (error) {
      reset();
    }
  };

  const { field } = useController({ name: 'search', control });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...field}
        formType={FormTypes.search}
        settings={{
          placeholder: 'Search',
          required: true,
        }}
        type={InputTypes.text}
      />
      <IconButton
        btnSize={32}
        ariaLabel={AriaLabels.search}
        type={ButtonTypes.button}
        onClick={handleClick}
      >
        <IoSearch size={20} />
      </IconButton>
    </Form>
  );
};

export default HeaderSearchInput;
