import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader: FC = () => (
  <LoaderWrap>
    <RotatingLines
      visible={true}
      width='56'
      strokeColor='#3470FF'
      strokeWidth='5'
      animationDuration='0.75'
      ariaLabel='rotating-lines-loading'
    />
  </LoaderWrap>
);

export default Loader;
