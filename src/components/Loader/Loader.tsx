import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';
import { IProps } from './Loader.types';

const Loader: FC<IProps> = ({basket}) => {
  return (
    <LoaderWrap>
      <RotatingLines
        visible={true}
        width='56'
        strokeColor={basket ? '#FFFFFF' : '#7C0021'}
        strokeWidth='5'
        animationDuration='0.75'
        ariaLabel='rotating-lines-loading'
      />
    </LoaderWrap>
  );
};

export default Loader;
