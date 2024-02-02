import { FC } from 'react';
import { IProps } from './Input.types';
import { Label, StyledInput, Title } from './Input.styled';
import { InputTypes } from '@/constants';

const Input: FC<IProps> = ({
  formType,
  settings,
  label,
  type = InputTypes.text,
  ...otherProps
}) => {
  const input = (
    <StyledInput
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
};

export default Input;
