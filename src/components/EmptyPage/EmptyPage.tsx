import { FC } from 'react';
import EmptyCartPicture from '@/icons/empty.svg?react';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { EmptyStyled } from './EmptyPage.styled';
import { Link } from 'react-router-dom';
import Button from '@/components/Button';
import { PagePaths } from '@/constants';
import { IProps } from './EmptyPage.types';

const EmptyCart: FC<IProps> = ({ title }) => {
  return (
    <EmptyStyled>
      {title === 'favorites' ? (
        <FaHeartCirclePlus size={80} title='Empty favorites' />
      ) : (
        <EmptyCartPicture title='Empty cart' />
      )}
      {title === 'favorites' ? (
        <h2>No favorites yet</h2>
      ) : (
        <h2>Your cart is empty</h2>
      )}
      {title === 'favorites' ? (
        <p>
          Mark your favorites wines <br />
          and always have them here
        </p>
      ) : (
        <p>
          Looks like you haven't made <br />
          your choice yet...
        </p>
      )}

      <Link to={PagePaths.storePath}>
        <Button
          title='Start shopping'
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Link>
    </EmptyStyled>
  );
};

export default EmptyCart;
