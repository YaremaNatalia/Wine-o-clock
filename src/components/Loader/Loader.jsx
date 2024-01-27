import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrap>
      <RotatingLines
        visible={true}
        height="56"
        width="56"
        strokeColor="#3470FF"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderWrap>
  );
};
