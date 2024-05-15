import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

const Loader: FC = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        visible={true}
        width='56'
        strokeColor='#7C0021'
        strokeWidth='5'
        animationDuration='0.75'
        ariaLabel='rotating-lines-loading'
      />
    </LoaderWrap>
  );
};

export default Loader;
