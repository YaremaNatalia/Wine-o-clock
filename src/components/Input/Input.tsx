import { FC } from 'react';
import { IProps } from './Input.types';
import { Label, StyledInput, Title } from './Input.styled';

const Input: FC<IProps> = ({ formType, settings, label, ...otherProps }) => {
  const input = (
    <StyledInput formType={formType} {...settings} {...otherProps} />
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
