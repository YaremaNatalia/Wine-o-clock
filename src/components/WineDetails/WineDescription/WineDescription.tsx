import { FC } from 'react';
import { IProps } from './WineDescription.types';
import { WineDescriptionStyled } from './WineDescription.styled';

const WineDescription: FC<IProps> = ({ description }) => {
  return <WineDescriptionStyled>{description}</WineDescriptionStyled>;
};

export default WineDescription;
