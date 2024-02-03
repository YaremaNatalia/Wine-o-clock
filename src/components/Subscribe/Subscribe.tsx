import { FC } from 'react';
import Input from '../Input';
import { ButtonTypes, FormTypes, InputTypes } from '@/constants';
import Button from '../Button';
import { ButtonWrapper, SubscribeWrapper } from './Subscribe.styled';

const Subscribe: FC = () => {
  return (
    <SubscribeWrapper>
      <Input
        formType={FormTypes.subscribe}
        settings={{
          placeholder: 'Enter email',
          required: true,
        }}
        type={InputTypes.email}
      />
      <ButtonWrapper>
        <Button
          title='Subscribe'
          width={120}
          height={50}
          sidePadding={20}
          fontSize={16}
          type={ButtonTypes.submit}
          onClick={() => console.log('Button clicked')}
        />
      </ButtonWrapper>
    </SubscribeWrapper>
  );
};

export default Subscribe;
