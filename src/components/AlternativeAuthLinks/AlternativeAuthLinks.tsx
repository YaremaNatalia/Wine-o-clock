import {
  Container,
  LinksList,
  ListItem,
  Title,
} from './AlternativeAuthLinks.styled';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PagePaths } from '@/constants';

const AlternativeAuthLinks = () => {
  return (
    <Container>
      <Title>Or use:</Title>
      <LinksList>
        <ListItem>
          <Link to={PagePaths.homePath}>
            <FcGoogle size={22} />
          </Link>
        </ListItem>
        <ListItem>
          <Link to={PagePaths.homePath}>
            <FaFacebook size={22} color='#1877F2' />
          </Link>
        </ListItem>
      </LinksList>
    </Container>
  );
};

export default AlternativeAuthLinks;
