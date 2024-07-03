import { FC } from 'react';
import EmptyCartPicture from '@/icons/empty.svg?react';
import { EmptyCartStyled } from './EmptyCart.styled';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { PagePaths } from '@/constants';

const EmptyCart: FC = () => {
  return (
    <EmptyCartStyled>
      <EmptyCartPicture title='Empty cart' />
      <h2>Your cart is empty</h2>
      <p>
        Looks like you haven't made <br />
        your choice yet...
      </p>
      <Link to={PagePaths.storePath}>
        <Button
          title='Shop now'
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Link>
    </EmptyCartStyled>
  );
};

export default EmptyCart;
