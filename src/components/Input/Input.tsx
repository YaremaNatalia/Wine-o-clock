import { FC, forwardRef } from 'react';
import { IProps } from './Input.types';
import { Label, StyledInput, Title } from './Input.styled';
import { InputTypes } from '@/constants';

const Input: FC<IProps> = forwardRef<HTMLInputElement, IProps>(
  (
    { formType, settings, label, type = InputTypes.text, ...otherProps },
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
