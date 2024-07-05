import { FC, forwardRef } from 'react';
import { IProps } from './Input.types';
import {
  AltElem,
  InputContainer,
  Label,
  StyledInput,
  Title,
} from './Input.styled';
import { InputTypes } from '@/constants';

const Input: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
  (
    {
      formType,
      settings,
      label,
      type = InputTypes.text,
      altElem,
      checked,
      description,
      ...otherProps
    },
    ref
  ) => {
    const input = (
      <StyledInput
        ref={ref}
        type={type}
        formType={formType}
        {...settings}
        {...otherProps}
      />
    );

    if (type === InputTypes.checkbox ) {
      return (
        <InputContainer>
          <AltElem checked={checked}>
            {altElem}
            {input}
          </AltElem>
          {description}
        </InputContainer>
      );
    }

    return label ? (
      <Label>
        <Title formType={formType}>{label}</Title>
        {input}
      </Label>
    ) : (
      input
    );
  }
);

export default Input;
