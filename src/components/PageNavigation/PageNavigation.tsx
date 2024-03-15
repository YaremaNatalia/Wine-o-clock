import { FC } from 'react';
import { Link } from 'react-router-dom';
import Container from '@/components/Container';
import { IoIosArrowForward } from 'react-icons/io';
import { IProps } from './PageNavigation.types';
import { PageNavigationWrapper } from './PageNavigation.styled';
import { PagePaths } from '@/constants';

const PageNavigation: FC<IProps> = ({ firstPageTitle, secondPageTitle }) => {
  return (
    <Container>
      <PageNavigationWrapper>
        <Link to={PagePaths.homePath}>
          <p>{firstPageTitle}</p>
        </Link>
        <IoIosArrowForward size={12} />
        <p className='currentPageTitle'>{secondPageTitle}</p>
      </PageNavigationWrapper>
    </Container>
  );
};

export default PageNavigation;
