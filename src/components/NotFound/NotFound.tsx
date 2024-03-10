import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ErrorCode, NotFoundStyled } from './NotFound.styled';
import Button from '@/components/Button';
import Container from '@/components/Container';

const NotFound: FC = () => (
  <NotFoundStyled>
    <Container>
      <ErrorCode>404</ErrorCode>
      <Link to='/'>
        <Button
          title='Home'
          onClick={(e) => {
            e.currentTarget.blur();
          }}
        />
      </Link>
    </Container>
  </NotFoundStyled>
);

export default NotFound;
